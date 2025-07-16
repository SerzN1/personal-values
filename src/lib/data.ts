import achievementIcon from '../assets/achievement.svg';
import benevolenceIcon from '../assets/benevolence.svg';
import conformityIcon from '../assets/conformity.svg';
import hedonismIcon from '../assets/hedonism.svg';
import powerIcon from '../assets/power.svg';
import securityIcon from '../assets/security.svg';
import selfDirectionIcon from '../assets/self-direction.svg';
import stimulationIcon from '../assets/stimulation.svg';
import traditionIcon from '../assets/tradition.svg';
import universalizmIcon from '../assets/universalizm.svg';

import type { GroupKey, IGroupData, IValue, IValueType } from './types';
import { shuffleArray } from './utils';

export const valueTypes: Record<string, IValueType> = {
  SelfDirection: {
    label: 'valueTypes.selfDirection.label',
    description: 'valueTypes.selfDirection.description',
    iconSvg: selfDirectionIcon,
    color: '#4a5fd5',          // Indigo (self-leadership)
    background: "rgb(63, 81, 181)"
  },
  Universalism: {
    label: 'valueTypes.universalism.label',
    description: 'valueTypes.universalism.description',
    iconSvg: universalizmIcon,
    color: '#00a58e',          // Teal
    background: "rgb(0, 191, 165)", // Same as Self-Transcendence
  },
  Stimulation: {
    label: 'valueTypes.stimulation.label',
    description: 'valueTypes.stimulation.description',
    iconSvg: stimulationIcon,
    color: '#FF6D00',          // Vivid orange (intensity)
    background: "rgb(255, 109, 0)",       // Slightly more vivid
  },
  Hedonism: {
    label: 'valueTypes.hedonism.label',
    description: 'valueTypes.hedonism.description',
    iconSvg: hedonismIcon,
    color: '#EC407A',          // Raspberry pink (pleasure)
    background: "rgb(236, 64, 122)",      // Pink/magenta
  },
  Achievement: {
    label: 'valueTypes.achievement.label',
    description: 'valueTypes.achievement.description',
    iconSvg: achievementIcon,
    color: '#c6851d',          // Mustard orange (success tone)
    background: "rgb(255, 193, 7)",       // Slightly softer gold
  },
  Power: {
    label: 'valueTypes.power.label',
    description: 'valueTypes.power.description',
    iconSvg: powerIcon,
    color: '#E53935',          // Red (dominance, impact)
    background: "rgb(229, 57, 53)",       // Deep red
  },
  Security: {
    label: 'valueTypes.security.label',
    description: 'valueTypes.security.description',
    iconSvg: securityIcon,
    color: '#546E7A',          // Deep slate (protection)
    background: "rgb(96, 125, 139)",      // Same as Conservation
  },
  Conformity: {
    label: 'valueTypes.conformity.label',
    description: 'valueTypes.conformity.description',
    iconSvg: conformityIcon,
    color: '#5C6BC0',          // Cool blue-violet (structure)
    background: "rgb(92, 107, 192)",      // Muted purple-blue
  },
  Tradition: {
    label: 'valueTypes.tradition.label',
    description: 'valueTypes.tradition.description',
    iconSvg: traditionIcon,
    color: '#8D6E63',          // Earthy brown (heritage)
    background: "rgb(141, 110, 99)",      // Dusty brown
  },
  Benevolence: {
    label: 'valueTypes.benevolence.label',
    description: 'valueTypes.benevolence.description',
    iconSvg: benevolenceIcon,
    color: '#43A047',          // Balanced green
    background: "rgb(216, 67, 21)",       // Warm reddish-orange
  }
};

export const groupData: Record<GroupKey, IGroupData> = {
  SelfTranscendence: {
    label: "groupData.selfTranscendence.label",
    summary: "groupData.selfTranscendence.summary",
    insights: "groupData.selfTranscendence.insights",
    color: "#00BFA5", // Strong teal (trust, care)
    backgroundColor: "rgba(0, 191, 165, 0.12)"
  },
  SelfEnhancement: {
    label: "groupData.selfEnhancement.label",
    summary: "groupData.selfEnhancement.summary",
    insights: "groupData.selfEnhancement.insights",
    color: '#FFC400', // Golden yellow (achievement)
    backgroundColor: "rgba(255, 196, 0, 0.12)", // Vibrant gold
  },
  OpennessToChange: {
    label: "groupData.opennessToChange.label",
    summary: "groupData.opennessToChange.summary",
    insights: "groupData.opennessToChange.insights.0",
    color: '#FF8A00', // Orange (creativity, exploration)
    backgroundColor: "rgba(255, 138, 0, 0.12)",       // Bright orange
  },
  Conservation: {
    label: "groupData.conservation.label",
    summary: "groupData.conservation.summary",
    insights: "groupData.conservation.insights",
    color: '#6b8b9b', // Muted blue-gray (stability)
    backgroundColor: "rgba(96, 125, 139, 0.12)",      // Neutral slate
  }
};

export const values: IValue[] = [
  {
    "id": "curiosity",
    "label": "values.curiosity.label",
    "description": "values.curiosity.description",
    "insight": "values.curiosity.insight",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["individual", "personal", "exploration"],
    "strengths": "values.curiosity.strengths",
    "dangers": "values.curiosity.dangers",
    "reflectionQuestions": "values.curiosity.reflectionQuestions"
  },
  {
    "id": "creativity",
    "label": "values.creativity.label",
    "description": "values.creativity.description",
    "insight": "values.creativity.insight",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["individual", "professional"],
    "strengths": "values.creativity.strengths",
    "dangers": "values.creativity.dangers",
    "reflectionQuestions": "values.creativity.reflectionQuestions"
  },
  {
    "id": "freedom",
    "label": "values.freedom.label",
    "description": "values.freedom.description",
    "insight": "values.freedom.insight",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["individual", "personal"],
    "strengths": "values.freedom.strengths",
    "dangers": "values.freedom.dangers",
    "reflectionQuestions": "values.freedom.reflectionQuestions"
  },
  {
    "id": "independence",
    "label": "values.independence.label",
    "description": "values.independence.description",
    "insight": "values.independence.insight",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["personal", "leadership"],
    "strengths": "values.independence.strengths",
    "dangers": "values.independence.dangers",
    "reflectionQuestions": "values.independence.reflectionQuestions"
  },
  {
    "id": "self-expression",
    "label": "values.selfExpression.label",
    "description": "values.selfExpression.description",
    "insight": "values.selfExpression.insight",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["individual", "social"],
    "strengths": "values.selfExpression.strengths",
    "dangers": "values.selfExpression.dangers",
    "reflectionQuestions": "values.selfExpression.reflectionQuestions"
  },
  {
    "id": "excitement",
    "label": "values.excitement.label",
    "description": "values.excitement.description",
    "insight": "values.excitement.insight",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["personal", "exploration"],
    "strengths": "values.excitement.strengths",
    "dangers": "values.excitement.dangers",
    "reflectionQuestions": "values.excitement.reflectionQuestions"
  },
  {
    "id": "adventure",
    "label": "values.adventure.label",
    "description": "values.adventure.description",
    "insight": "values.adventure.insight",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["personal", "travel"],
    "strengths": "values.adventure.strengths",
    "dangers": "values.adventure.dangers",
    "reflectionQuestions": "values.adventure.reflectionQuestions"
  },
  {
    "id": "novelty",
    "label": "values.novelty.label",
    "description": "values.novelty.description",
    "insight": "values.novelty.insight",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["individual", "professional"],
    "strengths": "values.novelty.strengths",
    "dangers": "values.novelty.dangers",
    "reflectionQuestions": "values.novelty.reflectionQuestions"
  },
  {
    "id": "energy",
    "label": "values.energy.label",
    "description": "values.energy.description",
    "insight": "values.energy.insight",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["personal", "leadership"],
    "strengths": "values.energy.strengths",
    "dangers": "values.energy.dangers",
    "reflectionQuestions": "values.energy.reflectionQuestions"
  },
  {
    "id": "challenge",
    "label": "values.challenge.label",
    "description": "values.challenge.description",
    "insight": "values.challenge.insight",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["professional", "growth"],
    "strengths": "values.challenge.strengths",
    "dangers": "values.challenge.dangers",
    "reflectionQuestions": "values.challenge.reflectionQuestions"
  },
  {
    "id": "achievement",
    "label": "values.achievement.label",
    "description": "values.achievement.description",
    "insight": "values.achievement.insight",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["professional", "goal-oriented"],
    "strengths": "values.achievement.strengths",
    "dangers": "values.achievement.dangers",
    "reflectionQuestions": "values.achievement.reflectionQuestions"
  },
  {
    "id": "ambition",
    "label": "values.ambition.label",
    "description": "values.ambition.description",
    "insight": "values.ambition.insight",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["leadership", "professional"],
    "strengths": "values.ambition.strengths",
    "dangers": "values.ambition.dangers",
    "reflectionQuestions": "values.ambition.reflectionQuestions"
  },
  {
    "id": "influence",
    "label": "values.influence.label",
    "description": "values.influence.description",
    "insight": "values.influence.insight",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["leadership", "impact"],
    "strengths": "values.influence.strengths",
    "dangers": "values.influence.dangers",
    "reflectionQuestions": "values.influence.reflectionQuestions"
  },
  {
    "id": "status",
    "label": "values.status.label",
    "description": "values.status.description",
    "insight": "values.status.insight",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["recognition", "professional"],
    "strengths": "values.status.strengths",
    "dangers": "values.status.dangers",
    "reflectionQuestions": "values.status.reflectionQuestions"
  },
  {
    "id": "control",
    "label": "values.control.label",
    "description": "values.control.description",
    "insight": "values.control.insight",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["stability", "leadership"],
    "strengths": "values.control.strengths",
    "dangers": "values.control.dangers",
    "reflectionQuestions": "values.control.reflectionQuestions"
  },
  {
    "id": "pleasure",
    "label": "values.pleasure.label",
    "description": "values.pleasure.description",
    "insight": "values.pleasure.insight",
    "type": "Hedonism",
    "group": "SelfEnhancement",
    "tags": ["personal", "wellbeing"],
    "strengths": "values.pleasure.strengths",
    "dangers": "values.pleasure.dangers",
    "reflectionQuestions": "values.pleasure.reflectionQuestions"
  },
  {
    "id": "stability",
    "label": "values.stability.label",
    "description": "values.stability.description",
    "insight": "values.stability.insight",
    "type": "Security",
    "group": "Conservation",
    "tags": ["safety", "wellbeing"],
    "strengths": "values.stability.strengths",
    "dangers": "values.stability.dangers",
    "reflectionQuestions": "values.stability.reflectionQuestions"
  },
  {
    "id": "order",
    "label": "values.order.label",
    "description": "values.order.description",
    "insight": "values.order.insight",
    "type": "Security",
    "group": "Conservation",
    "tags": ["organization", "clarity"],
    "strengths": "values.order.strengths",
    "dangers": "values.order.dangers",
    "reflectionQuestions": "values.order.reflectionQuestions"
  },
  {
    "id": "loyalty",
    "label": "values.loyalty.label",
    "description": "values.loyalty.description",
    "insight": "values.loyalty.insight",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["relationships", "responsibility"],
    "strengths": "values.loyalty.strengths",
    "dangers": "values.loyalty.dangers",
    "reflectionQuestions": "values.loyalty.reflectionQuestions"
  },
  {
    "id": "responsibility",
    "label": "values.responsibility.label",
    "description": "values.responsibility.description",
    "insight": "values.responsibility.insight",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["duty", "reliability"],
    "strengths": "values.responsibility.strengths",
    "dangers": "values.responsibility.dangers",
    "reflectionQuestions": "values.responsibility.reflectionQuestions"
  },
  {
    "id": "humility",
    "label": "values.humility.label",
    "description": "values.humility.description",
    "insight": "values.humility.insight",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["community", "modesty"],
    "strengths": "values.humility.strengths",
    "dangers": "values.humility.dangers",
    "reflectionQuestions": "values.humility.reflectionQuestions"
  },
  {
    "id": "tradition",
    "label": "values.tradition.label",
    "description": "values.tradition.description",
    "insight": "values.tradition.insight",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["culture", "identity"],
    "strengths": "values.tradition.strengths",
    "dangers": "values.tradition.dangers",
    "reflectionQuestions": "values.tradition.reflectionQuestions"
  },
  {
    "id": "empathy",
    "label": "values.empathy.label",
    "description": "values.empathy.description",
    "insight": "values.empathy.insight",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["relationships", "care"],
    "strengths": "values.empathy.strengths",
    "dangers": "values.empathy.dangers",
    "reflectionQuestions": "values.empathy.reflectionQuestions"
  },
  {
    "id": "kindness",
    "label": "values.kindness.label",
    "description": "values.kindness.description",
    "insight": "values.kindness.insight",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["connection", "support"],
    "strengths": "values.kindness.strengths",
    "dangers": "values.kindness.dangers",
    "reflectionQuestions": "values.kindness.reflectionQuestions"
  },
  {
    "id": "helpfulness",
    "label": "values.helpfulness.label",
    "description": "values.helpfulness.description",
    "insight": "values.helpfulness.insight",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["service", "community"],
    "strengths": "values.helpfulness.strengths",
    "dangers": "values.helpfulness.dangers",
    "reflectionQuestions": "values.helpfulness.reflectionQuestions"
  },
  {
    "id": "equality",
    "label": "values.equality.label",
    "description": "values.equality.description",
    "insight": "values.equality.insight",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["justice", "diversity"],
    "strengths": "values.equality.strengths",
    "dangers": "values.equality.dangers",
    "reflectionQuestions": "values.equality.reflectionQuestions"
  },
  {
    "id": "sustainability",
    "label": "values.sustainability.label",
    "description": "values.sustainability.description",
    "insight": "values.sustainability.insight",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["environment", "future"],
    "strengths": "values.sustainability.strengths",
    "dangers": "values.sustainability.dangers",
    "reflectionQuestions": "values.sustainability.reflectionQuestions"
  },
  {
    "id": "openness",
    "label": "values.openness.label",
    "description": "values.openness.description",
    "insight": "values.openness.insight",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["diversity", "inclusion"],
    "strengths": "values.openness.strengths",
    "dangers": "values.openness.dangers",
    "reflectionQuestions": "values.openness.reflectionQuestions"
  },
  {
    "id": "justice",
    "label": "values.justice.label",
    "description": "values.justice.description",
    "insight": "values.justice.insight",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["equity", "principles"],
    "strengths": "values.justice.strengths",
    "dangers": "values.justice.dangers",
    "reflectionQuestions": "values.justice.reflectionQuestions"
  },
  {
    "id": "compassion",
    "label": "values.compassion.label",
    "description": "values.compassion.description",
    "insight": "values.compassion.insight",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["care", "support"],
    "strengths": "values.compassion.strengths",
    "dangers": "values.compassion.dangers",
    "reflectionQuestions": "values.compassion.reflectionQuestions"
  },
  {
    "id": "community",
    "label": "values.community.label",
    "description": "values.community.description",
    "insight": "values.community.insight",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["belonging", "cooperation"],
    "strengths": "values.community.strengths",
    "dangers": "values.community.dangers",
    "reflectionQuestions": "values.community.reflectionQuestions"
  },
  {
    "id": "respect",
    "label": "values.respect.label",
    "description": "values.respect.description",
    "insight": "values.respect.insight",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["civility", "humanity"],
    "strengths": "values.respect.strengths",
    "dangers": "values.respect.dangers",
    "reflectionQuestions": "values.respect.reflectionQuestions"
  },
  {
    "id": "generosity",
    "label": "values.generosity.label",
    "description": "values.generosity.description",
    "insight": "values.generosity.insight",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["giving", "support"],
    "strengths": "values.generosity.strengths",
    "dangers": "values.generosity.dangers",
    "reflectionQuestions": "values.generosity.reflectionQuestions"
  },
  {
    "id": "playfulness",
    "label": "values.playfulness.label",
    "description": "values.playfulness.description",
    "insight": "values.playfulness.insight",
    "type": "Hedonism",
    "group": "SelfEnhancement",
    "tags": ["joy", "lightheartedness"],
    "strengths": "values.playfulness.strengths",
    "dangers": "values.playfulness.dangers",
    "reflectionQuestions": "values.playfulness.reflectionQuestions"
  },
  {
    "id": "spontaneity",
    "label": "values.spontaneity.label",
    "description": "values.spontaneity.description",
    "insight": "values.spontaneity.insight",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["adventure", "freedom"],
    "strengths": "values.spontaneity.strengths",
    "dangers": "values.spontaneity.dangers",
    "reflectionQuestions": "values.spontaneity.reflectionQuestions"
  },
  {
    "id": "sensuality",
    "label": "values.sensuality.label",
    "description": "values.sensuality.description",
    "insight": "values.sensuality.insight",
    "type": "Hedonism",
    "group": "SelfEnhancement",
    "tags": ["sensory", "pleasure"],
    "strengths": "values.sensuality.strengths",
    "dangers": "values.sensuality.dangers",
    "reflectionQuestions": "values.sensuality.reflectionQuestions"
  },
  {
    "id": "obedience",
    "label": "values.obedience.label",
    "description": "values.obedience.description",
    "insight": "values.obedience.insight",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["order", "discipline"],
    "strengths": "values.obedience.strengths",
    "dangers": "values.obedience.dangers",
    "reflectionQuestions": "values.obedience.reflectionQuestions"
  },
  {
    "id": "self_control",
    "label": "values.selfControl.label",
    "description": "values.selfControl.description",
    "insight": "values.selfControl.insight",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["discipline", "restraint"],
    "strengths": "values.selfControl.strengths",
    "dangers": "values.selfControl.dangers",
    "reflectionQuestions": "values.selfControl.reflectionQuestions"
  },
  {
    "id": "competence",
    "label": "values.competence.label",
    "description": "values.competence.description",
    "insight": "values.competence.insight",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["skill", "confidence"],
    "strengths": "values.competence.strengths",
    "dangers": "values.competence.dangers",
    "reflectionQuestions": "values.competence.reflectionQuestions"
  },
  {
    "id": "fun",
    "label": "values.fun.label",
    "description": "values.fun.description",
    "insight": "values.fun.insight",
    "type": "Hedonism",
    "group": "SelfEnhancement",
    "tags": ["joy", "laughter"],
    "strengths": "values.fun.strengths",
    "dangers": "values.fun.dangers",
    "reflectionQuestions": "values.fun.reflectionQuestions"
  },
  {
    "id": "authority",
    "label": "values.authority.label",
    "description": "values.authority.description",
    "insight": "values.authority.insight",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["leadership", "control"],
    "strengths": "values.authority.strengths",
    "dangers": "values.authority.dangers",
    "reflectionQuestions": "values.authority.reflectionQuestions"
  },
  {
    "id": "personal_security",
    "label": "values.personalSecurity.label",
    "description": "values.personalSecurity.description",
    "insight": "values.personalSecurity.insight",
    "type": "Security",
    "group": "Conservation",
    "tags": ["safety", "wellbeing"],
    "strengths": "values.personalSecurity.strengths",
    "dangers": "values.personalSecurity.dangers",
    "reflectionQuestions": "values.personalSecurity.reflectionQuestions"
  },
  {
    "id": "dominance",
    "label": "values.dominance.label",
    "description": "values.dominance.description",
    "insight": "values.dominance.insight",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["assertiveness", "strength"],
    "strengths": "values.dominance.strengths",
    "dangers": "values.dominance.dangers",
    "reflectionQuestions": "values.dominance.reflectionQuestions"
  },
  {
    "id": "wealth",
    "label": "values.wealth.label",
    "description": "values.wealth.description",
    "insight": "values.wealth.insight",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["prosperity", "resources"],
    "strengths": "values.wealth.strengths",
    "dangers": "values.wealth.dangers",
    "reflectionQuestions": "values.wealth.reflectionQuestions"
  },
  {
    "id": "cultural_heritage",
    "label": "values.culturalHeritage.label",
    "description": "values.culturalHeritage.description",
    "insight": "values.culturalHeritage.insight",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["roots", "legacy"],
    "strengths": "values.culturalHeritage.strengths",
    "dangers": "values.culturalHeritage.dangers",
    "reflectionQuestions": "values.culturalHeritage.reflectionQuestions"
  },
  {
    "id": "respect_for_elders",
    "label": "values.respectForElders.label",
    "description": "values.respectForElders.description",
    "insight": "values.respectForElders.insight",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["wisdom", "continuity"],
    "strengths": "values.respectForElders.strengths",
    "dangers": "values.respectForElders.dangers",
    "reflectionQuestions": "values.respectForElders.reflectionQuestions"
  },
  {
    "id": "enjoyment",
    "label": "values.enjoyment.label",
    "description": "values.enjoyment.description",
    "insight": "values.enjoyment.insight",
    "type": "Hedonism",
    "group": "OpennessToChange",
    "tags": ["pleasure", "joy", "well-being"],
    "strengths": "values.enjoyment.strengths",
    "dangers": "values.enjoyment.dangers",
    "reflectionQuestions": "values.enjoyment.reflectionQuestions"
  },
  {
    "id": "gratification",
    "label": "values.gratification.label",
    "description": "values.gratification.description",
    "insight": "values.gratification.insight",
    "type": "Hedonism",
    "group": "OpennessToChange",
    "tags": ["reward", "self-care", "motivation"],
    "strengths": "values.gratification.strengths",
    "dangers": "values.gratification.dangers",
    "reflectionQuestions": "values.gratification.reflectionQuestions"
  },
  {
    "id": "success",
    "label": "values.success.label",
    "description": "values.success.description",
    "insight": "values.success.insight",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["ambition", "achievement", "goals"],
    "strengths": "values.success.strengths",
    "dangers": "values.success.dangers",
    "reflectionQuestions": "values.success.reflectionQuestions"
  },
  {
    "id": "recognition",
    "label": "values.recognition.label",
    "description": "values.recognition.description",
    "insight": "values.recognition.insight",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["validation", "appreciation", "respect"],
    "strengths": "values.recognition.strengths",
    "dangers": "values.recognition.dangers",
    "reflectionQuestions": "values.recognition.reflectionQuestions"
  },
  {
    "id": "leadership",
    "label": "values.leadership.label",
    "description": "values.leadership.description",
    "insight": "values.leadership.insight",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["influence", "responsibility", "vision"],
    "strengths": "values.leadership.strengths",
    "dangers": "values.leadership.dangers",
    "reflectionQuestions": "values.leadership.reflectionQuestions"
  },
  {
    "id": "safety",
    "label": "values.safety.label",
    "description": "values.safety.description",
    "insight": "values.safety.insight",
    "type": "Security",
    "group": "Conservation",
    "tags": ["protection", "stability", "trust"],
    "strengths": "values.safety.strengths",
    "dangers": "values.safety.dangers",
    "reflectionQuestions": "values.safety.reflectionQuestions"
  },
  {
    "id": "protection",
    "label": "values.protection.label",
    "description": "values.protection.description",
    "insight": "values.protection.insight",
    "type": "Security",
    "group": "Conservation",
    "tags": ["defense", "care", "support"],
    "strengths": "values.protection.strengths",
    "dangers": "values.protection.dangers",
    "reflectionQuestions": "values.protection.reflectionQuestions"
  },
  {
    "id": "predictability",
    "label": "values.predictability.label",
    "description": "values.predictability.description",
    "insight": "values.predictability.insight",
    "type": "Security",
    "group": "Conservation",
    "tags": ["stability", "routine", "consistency"],
    "strengths": "values.predictability.strengths",
    "dangers": "values.predictability.dangers",
    "reflectionQuestions": "values.predictability.reflectionQuestions"
  },
  {
    "id": "resilience",
    "label": "values.resilience.label",
    "description": "values.resilience.description",
    "insight": "values.resilience.insight",
    "type": "Security",
    "group": "Conservation",
    "tags": ["adaptability", "strength", "perseverance"],
    "strengths": "values.resilience.strengths",
    "dangers": "values.resilience.dangers",
    "reflectionQuestions": "values.resilience.reflectionQuestions"
  },

  {
    "id": "self_discipline",
    "label": "values.selfDiscipline.label",
    "description": "values.selfDiscipline.description",
    "insight": "values.selfDiscipline.insight",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["control", "responsibility", "focus"],
    "strengths": "values.selfDiscipline.strengths",
    "dangers": "values.selfDiscipline.dangers",
    "reflectionQuestions": "values.selfDiscipline.reflectionQuestions"
  },
  {
    "id": "devotion",
    "label": "values.devotion.label",
    "description": "values.devotion.description",
    "insight": "values.devotion.insight",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["loyalty", "commitment", "faithfulness"],
    "strengths": "values.devotion.strengths",
    "dangers": "values.devotion.dangers",
    "reflectionQuestions": "values.devotion.reflectionQuestions"
  },
  {
    "id": "respect_for_customs",
    "label": "values.respectForCustoms.label",
    "description": "values.respectForCustoms.description",
    "insight": "values.respectForCustoms.insight",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["culture", "heritage", "ritual"],
    "strengths": "values.respectForCustoms.strengths",
    "dangers": "values.respectForCustoms.dangers",
    "reflectionQuestions": "values.respectForCustoms.reflectionQuestions"
  },
  {
    "id": "faith",
    "label": "values.faith.label",
    "description": "values.faith.description",
    "insight": "values.faith.insight",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["belief", "spirituality", "commitment"],
    "strengths": "values.faith.strengths",
    "dangers": "values.faith.dangers",
    "reflectionQuestions": "values.faith.reflectionQuestions"
  },
  {
    "id": "ritual",
    "label": "values.ritual.label",
    "description": "values.ritual.description",
    "insight": "values.ritual.insight",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["ceremony", "routine", "identity"],
    "strengths": "values.ritual.strengths",
    "dangers": "values.ritual.dangers",
    "reflectionQuestions": "values.ritual.reflectionQuestions"
  },
  {
    "id": "authenticity",
    "label": "values.authenticity.label",
    "description": "values.authenticity.description",
    "insight": "values.authenticity.insight",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["genuineness", "integrity", "honesty"],
    "strengths": "values.authenticity.strengths",
    "dangers": "values.authenticity.dangers",
    "reflectionQuestions": "values.authenticity.reflectionQuestions"
  },
  {
    "id": "exploration",
    "label": "values.exploration.label",
    "description": "values.exploration.description",
    "insight": "values.exploration.insight",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["curiosity", "growth", "learning"],
    "strengths": "values.exploration.strengths",
    "dangers": "values.exploration.dangers",
    "reflectionQuestions": "values.exploration.reflectionQuestions"
  },
  {
    "id": "belonging",
    "label": "values.belonging.label",
    "description": "values.belonging.description",
    "insight": "values.belonging.insight",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["connection", "community", "acceptance"],
    "strengths": "values.belonging.strengths",
    "dangers": "values.belonging.dangers",
    "reflectionQuestions": "values.belonging.reflectionQuestions"
  }
];

export const valueById: Record<string, IValue> = values.reduce((acc, value) => {
  acc[value.id] = value;
  return acc;
}, {});

export const valuesShuffled = shuffleArray(values);
