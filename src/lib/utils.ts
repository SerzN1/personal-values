import type { GroupKey, IAssessmentResult, IGroupAnalysisResult, IGroupData, IValue } from './types';

export function calculateValueScores(prioritizedIds: string[], allValues: IValue[]): IAssessmentResult {
  const valueScores: Record<string, number> = {};
  const typeScores: Record<string, number> = {};
  const groupScores: Record<string, number> = {};

  const maxScore = 5;
  const minScore = 0.5;
  const step = (maxScore - minScore) / (prioritizedIds.length - 1);

  prioritizedIds.forEach((valueId, index) => {
    const score = maxScore - index * step;
    const value = allValues.find(v => v.id === valueId);
    if (!value) return;

    valueScores[valueId] = score;

    // Score by type
    if (!typeScores[value.type]) typeScores[value.type] = 0;
    typeScores[value.type] += score;

    // Score by group
    if (!groupScores[value.group]) groupScores[value.group] = 0;
    groupScores[value.group] += score;
  });

  return {
    valueScores,
    typeScores,
    groupScores
  };
}

const OPPOSITES = [
  ['Self-Enhancement', 'Self-Transcendence'],
  ['Openness to Change', 'Conservation']
];

export function detectTensions(groupScores: Record<string, number>): string[] {
  console.log('tensiion', groupScores);
  const insights: string[] = [];

  for (const [a, b] of OPPOSITES) {
    const scoreA = groupScores[a] || 0;
    const scoreB = groupScores[b] || 0;
    const delta = Math.abs(scoreA - scoreB);

    if (delta < 10) {
      // Low difference = balanced orientation
      insights.push(`You show a relatively balanced emphasis between ${a} and ${b}, suggesting flexibility in navigating these areas.`);
    } else if (delta >= 10 && delta < 20) {
      // Mild contrast
      const dominant = scoreA > scoreB ? a : b;
      const lesser = scoreA > scoreB ? b : a;
      insights.push(`You appear to lean toward ${dominant}, but still show awareness of the values associated with ${lesser}.`);
    } else if (delta >= 20 && delta < 30) {
      // Clear preference
      const dominant = scoreA > scoreB ? a : b;
      const lesser = scoreA > scoreB ? b : a;
      insights.push(`You show a clear preference for ${dominant}, while placing less importance on ${lesser}. This may reflect a prioritization of one approach over the other.`);
    } else {
      // Strong contrast (polarization)
      const dominant = scoreA > scoreB ? a : b;
      const lesser = scoreA > scoreB ? b : a;
      insights.push(`There is a strong contrast between your preference for ${dominant} and your lower emphasis on ${lesser}. This tension might shape important decisions or challenges.`);
    }
  }

  return insights;
}


/**
 * Summarizes group scores from the top values.
 *
 * @param {IValue[]} topValues
 * @return {*}  {Record<string, number>}
 */
export function summarizeGroups(topValues: [string, number][], valueById: Record<string, IValue>): Record<GroupKey, number> {
  const groupTotals: Record<string, number> = {};

  for (const val of topValues) {
    const group = valueById[val[0]].group; // e.g. "Self-Transcendence"
    groupTotals[group] = (groupTotals[group] || 0) + val[1];
  }

  return groupTotals;
}

export function analyzeGroupScores(scores: Record<GroupKey, number>, groupData: Record<GroupKey, IGroupData>): IGroupAnalysisResult {
  const entries = Object.entries(scores) as [GroupKey, number][];
  const sorted = entries.sort((a, b) => b[1] - a[1]);

  const [topGroup, topScore] = sorted[0];
  const [bottomGroup, bottomScore] = sorted[sorted.length - 1];

  const top = groupData[topGroup];
  const bottom = groupData[bottomGroup];

  const gap = topScore - bottomScore;
  const polarization = gap >= 30 ? {
    tensionBetween: [topGroup, bottomGroup] as [GroupKey, GroupKey],
    gap,
    message: `There's a significant gap (${gap} points) between your focus on ${top.label} and your lesser emphasis on ${bottom.label}. This may lead to inner tension between your aspirations and your need for stability or balance.`
  } : undefined;

  return {
    topGroup,
    bottomGroup,
    summary: `Your values are centered around ${top.summary}. You prioritize this over ${bottom.summary}.`,
    insights: top.insights,
    polarization
  };
}

const reflectionPrompts: Record<string, (score: number) => string> = {
  SelfTranscendence: (score) => score >= 70
    ? "How do you care for yourself while caring for others?"
    : "Where might more compassion or shared purpose energize your direction?",
  SelfEnhancement: (score) => score >= 70
    ? "How does your drive for achievement support — or compete with — your relationships?"
    : "What would you pursue more boldly if recognition didn’t matter?",
  OpennessToChange: (score) => score >= 70
    ? "Where are you being called to explore something new right now?"
    : "What new experiences might stretch your perspective?",
  Conservation: (score) => score >= 70
    ? "Where does structure or routine help you feel safe right now?"
    : "What small rituals might create more stability in your life?"
};

export function generateUserReflections(scores: Record<string, number>): string[] {
  return Object.entries(scores).map(([key, score]) => {
    return reflectionPrompts[key](score);
  });
}
