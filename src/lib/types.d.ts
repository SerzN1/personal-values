export interface IValueGroup {
  label: string;
  description: string;
  iconSvg: string; // SVG markup for background
  color: string; // text color
  background: string; // background color
  mainColor: string; // main color
  backgroundColor: string; // background color
}

export interface IValue {
  name: string;
  synonyms: string[];
  info: string;
  strengths: string;
  dangers: string;
  group: string;
}

