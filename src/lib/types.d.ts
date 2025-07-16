type TranslationKey = string;

export interface IValueType {
  label: TranslationKey;
  description: TranslationKey;
  iconSvg: string; // SVG markup for background
  color: string; // text color
  background: string; // background color
}

export interface IValue {
  id: string;
  label: TranslationKey;
  tags: string[];
  reflectionQuestions: TranslationKey;
  description: TranslationKey;
  insight: TranslationKey;
  strengths: TranslationKey;
  dangers: TranslationKey;
  type: string;
  group: string;
}

type GroupKey = 'SelfTranscendence' | 'SelfEnhancement' | 'OpennessToChange' | 'Conservation';

export interface IGroupData {
  label: string;
  summary: TranslationKey;
  insights: TranslationKey;
  color: string;
  backgroundColor: string;
}

export interface IGroupPolarization {
  gap: number;
  message: {
    gap: string;
    topLabel: string;
    bottomLabel: string;
  };
}

export interface IGroupAnalysisResult {
  topGroup: GroupKey;
  bottomGroup: GroupKey;
  topSummary: TranslationKey;
  bottomSummary: TranslationKey;
  insights: TranslationKey;
  polarization?: IGroupPolarization;
}
