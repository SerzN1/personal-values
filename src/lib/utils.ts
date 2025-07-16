import type { GroupKey, IGroupAnalysisResult, IGroupData, IGroupPolarization, IValue } from './types';

const OPPOSITES = [
  ['SelfEnhancement', 'SelfTranscendence'],
  ['OpennessToChange', 'Conservation']
];

export function detectTensions(groupScores: Record<string, number>, groupData: Record<GroupKey, IGroupData>, t: any): string[] {
  const insights: string[] = [];

  for (const [a, b] of OPPOSITES) {
    const scoreA = groupScores[a] || 0;
    const scoreB = groupScores[b] || 0;
    const delta = Math.abs(scoreA - scoreB);
    const aLabel = t(groupData[a].label);
    const bLabel = t(groupData[b].label);
    const dominant = scoreA > scoreB ? aLabel : bLabel;
    const lesser = scoreA > scoreB ? bLabel : aLabel;

    if (delta < 10) {
      // Low difference = balanced orientation
      insights.push(t('analysis.tensions.balanced', { groupA: aLabel, groupB: bLabel }));
    } else if (delta >= 10 && delta < 20) {
      // Mild contrast
      insights.push(t('analysis.tensions.mildContrast', { dominant, lesser }));
    } else if (delta >= 20 && delta < 30) {
      // Clear preference
      insights.push(t('analysis.tensions.clearPreference', { dominant, lesser }));
    } else {
      // Strong contrast (polarization)
      insights.push(t('analysis.tensions.strongContrast', { dominant, lesser }));
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

  const gap = topScore - bottomScore;
  const polarization: IGroupPolarization = gap >= 30 ? {
    gap,
    message: {
      gap: gap.toString(),
      topLabel: top.label,
      bottomLabel: bottom.label
    }
  } : undefined;

  return {
    topGroup,
    bottomGroup,
    topSummary: top.summary,
    bottomSummary: bottom.summary,
    insights: top.insights,
    polarization
  };
}

export function generateUserReflections(scores: Record<string, number>): string[] {
  return Object.entries(scores).map(([key, score]) => {
    const threshold = score >= 70 ? 'high' : 'low';
    return `analysis.reflections.${key}.${threshold}`;
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
