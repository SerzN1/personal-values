import { groupData } from './data';
import type { GroupKey, IAssessmentResult, IGroupAnalysisResult, IValue } from './types';

// Generate all unique pairs
export function getPairs(arr: IValue[]) {
  const pairs: [IValue, IValue][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}

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

function detectTensions(groupScores: Record<string, number>) {
  const insights: string[] = [];

  for (const [a, b] of OPPOSITES) {
    const delta = Math.abs((groupScores[a] || 0) - (groupScores[b] || 0));

    if (delta < 2) {
      insights.push(`You appear to value both ${a} and ${b}, which could reflect an inner pull between competing drives.`);
    } else if ((groupScores[a] || 0) > (groupScores[b] || 0)) {
      insights.push(`You lean strongly toward ${a}, while ${b} values are less emphasized.`);
    } else {
      insights.push(`You prioritize ${b}, suggesting a preference for its stability over the flexibility of ${a}.`);
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
export function summarizeGroups(topValues: IValue[]): Record<string, number> {
  const groupTotals: Record<string, number> = {};

  for (const val of topValues) {
    const group = val.group; // e.g. "Self-Transcendence"
    groupTotals[group] = (groupTotals[group] || 0) + val.score;
  }

  return groupTotals;
}

export function analyzeGroupScores(scores: Record<GroupKey, number>): IGroupAnalysisResult {
  const entries = Object.entries(scores) as [GroupKey, number][];
  const sorted = entries.sort((a, b) => b[1] - a[1]);

  const [topGroup, topScore] = sorted[0];
  const [bottomGroup, bottomScore] = sorted[sorted.length - 1];

  const top = groupData[topGroup];
  const bottom = groupData[bottomGroup];

  const summary = `Your values are centered around ${top.summary}. You prioritize this over ${bottom.summary}.`;

  const insights = [...top.insights, ...bottom.insights];

  const gap = topScore - bottomScore;
  const polarization = gap >= 30 ? {
    tensionBetween: [topGroup, bottomGroup] as [GroupKey, GroupKey],
    gap,
    message: `There's a significant gap (${gap} points) between your focus on ${top.label} and your lesser emphasis on ${bottom.label}. This may lead to inner tension between your aspirations and your need for stability or balance.`
  } : undefined;

  return {
    topGroup,
    bottomGroup,
    summary,
    insights,
    polarization
  };
}
