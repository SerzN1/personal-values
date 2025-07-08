export interface IValueType {
  label: string;
  description: string;
  iconSvg: string; // SVG markup for background
  color: string; // text color
  background: string; // background color
}

export interface IValue {
  id: string;
  label: string;
  tags: string[];
  reflectionQuestions: string[];
  description: string;
  strengths: string;
  dangers: string;
  type: string;
  group: string;
}

export interface IValueScore {
  id: string;
  score: number;
  type: string;
  group: string;
}

export interface IAssessmentResult {
  valueScores: Record<string, number>;
  typeScores: Record<string, number>;
  groupScores: Record<string, number>;
}

type GroupKey = 'SelfTranscendence' | 'SelfEnhancement' | 'OpennessToChange' | 'Conservation';

export interface IGroupAnalysisResult {
  topGroup: GroupKey;
  bottomGroup: GroupKey;
  summary: string;
  insights: string[];
  polarization?: {
    tensionBetween: [GroupKey, GroupKey];
    gap: number;
    message: string;
  };
}
