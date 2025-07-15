import { get } from 'svelte/store';
import { t } from './i18n';
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
  ['SelfEnhancement', 'SelfTranscendence'],
  ['OpennessToChange', 'Conservation']
];

export function detectTensions(groupScores: Record<string, number>, groupData: Record<GroupKey, IGroupData>): string[] {
  const insights: string[] = [];
  const translate = get(t);

  for (const [a, b] of OPPOSITES) {
    const scoreA = groupScores[a] || 0;
    const scoreB = groupScores[b] || 0;
    const delta = Math.abs(scoreA - scoreB);
    const aLabel = groupData[a].label;
    const bLabel = groupData[b].label;

    if (delta < 10) {
      // Low difference = balanced orientation
      insights.push(translate('analysis.tensions.balanced', { groupA: aLabel, groupB: bLabel }));
    } else if (delta >= 10 && delta < 20) {
      // Mild contrast
      const dominant = scoreA > scoreB ? aLabel : bLabel;
      const lesser = scoreA > scoreB ? bLabel : aLabel;
      insights.push(translate('analysis.tensions.mildContrast', { dominant, lesser }));
    } else if (delta >= 20 && delta < 30) {
      // Clear preference
      const dominant = scoreA > scoreB ? aLabel : bLabel;
      const lesser = scoreA > scoreB ? bLabel : aLabel;
      insights.push(translate('analysis.tensions.clearPreference', { dominant, lesser }));
    } else {
      // Strong contrast (polarization)
      const dominant = scoreA > scoreB ? aLabel : bLabel;
      const lesser = scoreA > scoreB ? bLabel : aLabel;
      insights.push(translate('analysis.tensions.strongContrast', { dominant, lesser }));
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
  const groupTotals: Record<string, number> = {
    'SelfEnhancement': 0,
    'SelfTranscendence': 0,
    'OpennessToChange': 0,
    'Conservation': 0,
  };

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
  const translate = get(t);

  const gap = topScore - bottomScore;
  const polarization = gap >= 30 ? {
    gap,
    message: translate('analysis.groupAnalysis.polarizationMessage', {
      gap: gap.toString(),
      topLabel: top.label,
      bottomLabel: bottom.label
    })
  } : undefined;

  return {
    topGroup,
    bottomGroup,
    summary: translate('analysis.groupAnalysis.summary', {
      topSummary: top.summary,
      bottomSummary: bottom.summary
    }),
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
  const translate = get(t);

  return Object.entries(scores).map(([key, score]) => {
    const threshold = score >= 70 ? 'high' : 'low';
    return translate(`analysis.reflections.${key}.${threshold}`);
  });
}

export function shuffleArray<T>(arr: T[]): T[] {
  const array = [...arr];
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
