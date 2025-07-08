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

import type { GroupKey, IValue, IValueType, IGroupData } from './types';

export const valueTypes: Record<string, IValueType> = {
  SelfDirection: {
    label: 'Self-Direction',
    description: 'Independent thought and action; choosing, creating, exploring.',
    iconSvg: selfDirectionIcon,
    color: '#1a237e',          // Dark Indigo
    background: '#e3e6fa'
  },
  Universalism: {
    label: 'Universalism',
    description: 'Understanding, appreciation, tolerance, and protection for the welfare of all people and for nature.',
    iconSvg: universalizmIcon,
    color: '#00695c',          // Teal
    background: '#e0f2f1'
  },
  Stimulation: {
    label: 'Stimulation',
    description: 'Excitement, novelty, and challenge in life.',
    iconSvg: stimulationIcon,
    color: '#ad1457',          // Deep Pink / Magenta
    background: '#fce4ec'
  },
  Hedonism: {
    label: 'Hedonism',
    description: 'Pleasure and sensuous gratification for oneself.',
    iconSvg: hedonismIcon,
    color: '#ff6f00',          // Orange
    background: '#fff3e0'
  },
  Achievement: {
    label: 'Achievement',
    description: 'Personal success through demonstrating competence according to social standards.',
    iconSvg: achievementIcon,
    color: '#2e7d32',          // Dark Green
    background: '#e8f5e9'
  },
  Power: {
    label: 'Power',
    description: 'Social status and prestige, control or dominance over people and resources.',
    iconSvg: powerIcon,
    color: '#6d4c41',          // Brown
    background: '#efebe9'
  },
  Security: {
    label: 'Security',
    description: 'Safety, harmony, and stability of society, of relationships, and of self.',
    iconSvg: securityIcon,
    color: '#0277bd',          // Medium Blue
    background: '#e1f5fe'
  },
  Conformity: {
    label: 'Conformity',
    description: 'Restraint of actions, inclinations, and impulses likely to upset or harm others and violate social expectations or norms.',
    iconSvg: conformityIcon,
    color: '#37474f',          // Dark Gray-Blue
    background: '#eceff1'
  },
  Tradition: {
    label: 'Tradition',
    description: 'Respect, commitment, and acceptance of the customs and ideas that traditional culture or religion provide.',
    iconSvg: traditionIcon,
    color: '#8d6e63',          // Muted Brown
    background: '#fbe9e7'
  },
  Benevolence: {
    label: 'Benevolence',
    description: 'Preserving and enhancing the welfare of those with whom one is in frequent personal contact.',
    iconSvg: benevolenceIcon,
    color: '#388e3c',          // Medium Green
    background: '#e8f5e9'
  }
};

export const groupData: Record<GroupKey, IGroupData> = {
  SelfTranscendence: {
    label: "Self-Transcendence",
    summary: "helping others, compassion, and fairness",
    insights: [
      "You may feel most fulfilled when you're supporting others or making a positive impact.",
      "You likely value fairness, empathy, and social responsibility."
    ],
    color: '#00E5A1',
  },
  SelfEnhancement: {
    label: "Self-Enhancement",
    summary: "personal ambition, success, and influence",
    insights: [
      "You may feel driven by achievement, recognition, and autonomy.",
      "A focus on success can be energizing, but balance with care for others helps relationships thrive."
    ],
    color: '#FFC400',
  },
  OpennessToChange: {
    label: "Openness to Change",
    summary: "freedom, creativity, and exploration",
    insights: [
      "You likely enjoy exploring, learning, and expressing your individuality.",
      "This drive supports innovation, but may resist routine or stability."
    ],
    color: '#FF8A00'
  },
  Conservation: {
    label: "Conservation",
    summary: "security, structure, and tradition",
    insights: [
      "You value order, safety, and traditions that create predictability.",
      "This can build strong foundations, but may reduce openness to change or risk."
    ],
    color: '#90A4AE'
  }
};

export const values: IValue[] = [
  {
    "id": "curiosity",
    "label": "Curiosity",
    "description": "A drive to seek new ideas, knowledge, and experiences.",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["individual", "personal", "exploration"],
    "strengths": "You’re open-minded and driven to explore new ideas and perspectives.",
    "dangers": "Curiosity can lead to distraction or superficial understanding if not focused.",
    "reflectionQuestions": [
      "Where is your curiosity leading you right now?",
      "How do you choose which questions are worth pursuing?"
    ]
  },
  {
    "id": "creativity",
    "label": "Creativity",
    "description": "Using original thinking and imagination to shape ideas and solutions.",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["individual", "professional"],
    "strengths": "You bring originality and innovation to your work and life.",
    "dangers": "Creativity may cause frustration when ideas are not realized or accepted.",
    "reflectionQuestions": [
      "How do you express your creativity today?",
      "What blocks prevent your creative potential?"
    ]
  },
  {
    "id": "freedom",
    "label": "Freedom",
    "description": "Having the autonomy to make your own choices and act independently.",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["individual", "personal"],
    "strengths": "You value autonomy and making your own choices.",
    "dangers": "Freedom without boundaries can lead to impulsiveness or isolation.",
    "reflectionQuestions": [
      "In what areas do you feel most free?",
      "How do you balance freedom with responsibility?"
    ]
  },
  {
    "id": "independence",
    "label": "Independence",
    "description": "Relying on your own judgment and values to guide your actions.",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["personal", "leadership"],
    "strengths": "You think and act based on your own values and judgments.",
    "dangers": "Excessive independence might cause difficulty collaborating or asking for help.",
    "reflectionQuestions": [
      "Where do you rely on your own judgment most?",
      "When could collaboration improve your outcomes?"
    ]
  },
  {
    "id": "self-expression",
    "label": "Self-Expression",
    "description": "Openly showing your thoughts, emotions, and identity.",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["individual", "social"],
    "strengths": "You are authentic and true to yourself in words and actions.",
    "dangers": "Self-expression may unintentionally hurt others if unchecked.",
    "reflectionQuestions": [
      "How do you express your true self to others?",
      "How do you balance honesty with empathy?"
    ]
  },
  {
    "id": "excitement",
    "label": "Excitement",
    "description": "Seeking energy and thrill through stimulating experiences.",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["personal", "exploration"],
    "strengths": "You seek and create energy through new and thrilling experiences.",
    "dangers": "Chasing excitement can lead to burnout or recklessness.",
    "reflectionQuestions": [
      "What recent experiences have excited you?",
      "How do you manage your energy to avoid burnout?"
    ]
  },
  {
    "id": "adventure",
    "label": "Adventure",
    "description": "Embracing new challenges and stepping into the unknown.",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["personal", "travel"],
    "strengths": "You pursue challenges and new horizons with courage.",
    "dangers": "Adventure-seeking might cause risk-taking without sufficient caution.",
    "reflectionQuestions": [
      "What new challenges are you ready to face?",
      "How do you assess and manage risks in your adventures?"
    ]
  },
  {
    "id": "novelty",
    "label": "Novelty",
    "description": "Enjoying freshness, diversity, and unexpected experiences.",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["individual", "professional"],
    "strengths": "You thrive on new ideas and diversity in experiences.",
    "dangers": "Constant novelty can disrupt focus and consistency.",
    "reflectionQuestions": [
      "How do you incorporate novelty without losing focus?",
      "What routines help you stay grounded amid change?"
    ]
  },
  {
    "id": "energy",
    "label": "Energy",
    "description": "Living with enthusiasm, boldness, and high personal drive.",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["personal", "leadership"],
    "strengths": "You bring enthusiasm and boldness to your endeavors.",
    "dangers": "High energy without rest may cause exhaustion or overwhelm.",
    "reflectionQuestions": [
      "How do you channel your energy productively?",
      "What signs tell you to slow down and recharge?"
    ]
  },
  {
    "id": "challenge",
    "label": "Challenge",
    "description": "Pushing yourself through demanding goals and personal growth.",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["professional", "growth"],
    "strengths": "You seek growth through demanding goals and competition.",
    "dangers": "Constant challenge without balance may cause stress or burnout.",
    "reflectionQuestions": [
      "What challenges motivate you most?",
      "How do you maintain balance when pursuing tough goals?"
    ]
  },
  {
    "id": "achievement",
    "label": "Achievement",
    "description": "Striving to accomplish goals and demonstrate personal success.",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["professional", "goal-oriented"],
    "strengths": "You are driven to reach goals and demonstrate capability.",
    "dangers": "Over-focus on achievement may cause stress or neglect of relationships.",
    "reflectionQuestions": [
      "What achievement are you most proud of?",
      "How do you measure success in your life?"
    ]
  },
  {
    "id": "ambition",
    "label": "Ambition",
    "description": "Pursuing growth, impact, and advancement with determination.",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["leadership", "professional"],
    "strengths": "You set high goals and work hard to achieve them.",
    "dangers": "Ambition without balance may lead to burnout or overcompetitiveness.",
    "reflectionQuestions": [
      "Where is your ambition leading you right now?",
      "How do you stay grounded as you pursue your goals?"
    ]
  },
  {
    "id": "influence",
    "label": "Influence",
    "description": "Shaping outcomes, decisions, or people through your presence and voice.",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["leadership", "impact"],
    "strengths": "You create impact and inspire others to follow your lead.",
    "dangers": "Influence used without care may manipulate or overpower others.",
    "reflectionQuestions": [
      "Who do you influence most in your life?",
      "What kind of impact do you want to leave behind?"
    ]
  },
  {
    "id": "status",
    "label": "Status",
    "description": "Seeking recognition, prestige, and respect in social or professional spaces.",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["recognition", "professional"],
    "strengths": "You’re motivated by excellence and aspire to be seen and valued.",
    "dangers": "Chasing status may disconnect you from deeper meaning or authenticity.",
    "reflectionQuestions": [
      "What kind of recognition do you value most?",
      "How do you stay true to yourself while seeking success?"
    ]
  },
  {
    "id": "control",
    "label": "Control",
    "description": "Maintaining influence over circumstances and outcomes.",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["stability", "leadership"],
    "strengths": "You bring order and decisiveness to uncertain situations.",
    "dangers": "Seeking control may lead to rigidity or suppressing others’ input.",
    "reflectionQuestions": [
      "What do you feel most in control of right now?",
      "When do you find it hardest to let go?"
    ]
  },
  {
    "id": "pleasure",
    "label": "Pleasure",
    "description": "Enjoying comfort, delight, and life's sensory experiences.",
    "type": "Hedonism",
    "group": "SelfEnhancement",
    "tags": ["personal", "wellbeing"],
    "strengths": "You bring joy and lightness to your environment and routines.",
    "dangers": "Overindulgence may distract from long-term goals or responsibilities.",
    "reflectionQuestions": [
      "What brings you the most pleasure in daily life?",
      "How do you balance indulgence and discipline?"
    ]
  },
  {
    "id": "stability",
    "label": "Stability",
    "description": "Valuing predictability and protection from threats or disruption.",
    "type": "Security",
    "group": "Conservation",
    "tags": ["safety", "wellbeing"],
    "strengths": "You create a steady and reassuring environment for yourself and others.",
    "dangers": "Seeking too much stability may lead to resistance to necessary change.",
    "reflectionQuestions": [
      "What makes you feel most secure?",
      "When does safety hold you back from taking risks?"
    ]
  },
  {
    "id": "order",
    "label": "Order",
    "description": "Appreciating structure, rules, and clear expectations.",
    "type": "Security",
    "group": "Conservation",
    "tags": ["organization", "clarity"],
    "strengths": "You maintain clarity and structure in complex situations.",
    "dangers": "Strict attachment to order may reduce flexibility and innovation.",
    "reflectionQuestions": [
      "Where does structure help you thrive?",
      "When might being flexible serve you better?"
    ]
  },
  {
    "id": "loyalty",
    "label": "Loyalty",
    "description": "Staying devoted to people, traditions, or causes you value.",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["relationships", "responsibility"],
    "strengths": "You’re dependable and stand by your commitments.",
    "dangers": "Loyalty may prevent you from questioning what no longer serves you.",
    "reflectionQuestions": [
      "What are you most loyal to?",
      "When does loyalty create inner conflict?"
    ]
  },
  {
    "id": "responsibility",
    "label": "Responsibility",
    "description": "Upholding social or moral obligations with care and consistency.",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["duty", "reliability"],
    "strengths": "You are trusted and show up consistently for others.",
    "dangers": "Over-responsibility may lead to guilt or burnout.",
    "reflectionQuestions": [
      "What responsibilities do you carry most heavily?",
      "How do you know when to say no?"
    ]
  },
  {
    "id": "humility",
    "label": "Humility",
    "description": "Keeping ego in check and respecting shared norms and others’ contributions.",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["community", "modesty"],
    "strengths": "You remain grounded and respectful in your actions.",
    "dangers": "Excess humility can suppress self-worth or expression.",
    "reflectionQuestions": [
      "What does humility look like for you?",
      "When might it limit your voice?"
    ]
  },
  {
    "id": "tradition",
    "label": "Tradition",
    "description": "Honoring cultural, spiritual, or family practices that guide life.",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["culture", "identity"],
    "strengths": "You bring meaning and continuity through rituals and heritage.",
    "dangers": "Clinging to tradition may block growth or relevance.",
    "reflectionQuestions": [
      "Which traditions shape your life today?",
      "How do you adapt tradition to modern needs?"
    ]
  },
  {
    "id": "empathy",
    "label": "Empathy",
    "description": "Understanding and connecting with the feelings of others.",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["relationships", "care"],
    "strengths": "You build trust and compassion through deep understanding.",
    "dangers": "Too much emotional attunement can lead to emotional exhaustion or blurred boundaries.",
    "reflectionQuestions": [
      "Who do you find it easiest to empathize with?",
      "When does empathy stretch you too far?"
    ]
  },
  {
    "id": "kindness",
    "label": "Kindness",
    "description": "Acting with care, generosity, and goodwill toward others.",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["connection", "support"],
    "strengths": "You create warmth and connection through thoughtful actions.",
    "dangers": "Unbalanced kindness may lead to neglecting your own needs.",
    "reflectionQuestions": [
      "When was the last time your kindness made a difference?",
      "How do you balance kindness with self-respect?"
    ]
  },
  {
    "id": "helpfulness",
    "label": "Helpfulness",
    "description": "Being willing to support, assist, or uplift others.",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["service", "community"],
    "strengths": "You make a meaningful difference in others’ lives.",
    "dangers": "Constant helping may create dependency or neglect of personal growth.",
    "reflectionQuestions": [
      "Who do you feel called to help right now?",
      "How do you protect your own energy while supporting others?"
    ]
  },
  {
    "id": "equality",
    "label": "Equality",
    "description": "Believing in fairness and equal opportunities for all people.",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["justice", "diversity"],
    "strengths": "You advocate for fairness and inclusiveness in your circles.",
    "dangers": "Pursuing fairness may lead to frustration in systems slow to change.",
    "reflectionQuestions": [
      "What does fairness mean to you in daily life?",
      "Where do you see inequality that moves you to act?"
    ]
  },
  {
    "id": "sustainability",
    "label": "Sustainability",
    "description": "Protecting nature and acting with care for the planet and future generations.",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["environment", "future"],
    "strengths": "You make choices that reflect long-term thinking and care for the Earth.",
    "dangers": "Sustainability efforts can feel overwhelming or isolating when not shared.",
    "reflectionQuestions": [
      "What sustainable habits do you feel proud of?",
      "How do you inspire others toward environmental action?"
    ]
  },
  {
    "id": "openness",
    "label": "Openness to Others",
    "description": "Welcoming and appreciating different cultures, perspectives, and ways of life.",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["diversity", "inclusion"],
    "strengths": "You foster connection across differences and create inclusive spaces.",
    "dangers": "Openness can become indecisiveness or dilution of your own stance.",
    "reflectionQuestions": [
      "When has openness changed your perspective?",
      "Where do you still feel challenged by difference?"
    ]
  },
  {
    "id": "justice",
    "label": "Justice",
    "description": "Standing up for what is fair and morally right.",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["equity", "principles"],
    "strengths": "You advocate for fairness and integrity even when it's hard.",
    "dangers": "Strong moral stance may lead to conflict or rigidity.",
    "reflectionQuestions": [
      "What injustices are you most sensitive to?",
      "How do you balance fairness with flexibility?"
    ]
  },
  {
    "id": "compassion",
    "label": "Compassion",
    "description": "Caring deeply about the pain or suffering of others, with a desire to alleviate it.",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["care", "support"],
    "strengths": "You offer deep care and emotional presence to those in need.",
    "dangers": "Compassion fatigue can occur when emotional reserves are depleted.",
    "reflectionQuestions": [
      "Where is your compassion most needed right now?",
      "How do you replenish yourself when helping others?"
    ]
  },
  {
    "id": "community",
    "label": "Community",
    "description": "Valuing connection and shared responsibility in groups you belong to.",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["belonging", "cooperation"],
    "strengths": "You strengthen groups through loyalty, collaboration, and care.",
    "dangers": "Over-identifying with the group can suppress individual needs.",
    "reflectionQuestions": [
      "What communities give you strength?",
      "How do you balance your role with personal boundaries?"
    ]
  },
  {
    "id": "respect",
    "label": "Respect",
    "description": "Valuing dignity, rights, and perspectives of others.",
    "type": "Universalism",
    "group": "SelfTranscendence",
    "tags": ["civility", "humanity"],
    "strengths": "You listen and act with fairness toward all, regardless of status or views.",
    "dangers": "Respect without discernment may enable harmful behavior.",
    "reflectionQuestions": [
      "Who do you show deep respect for — and why?",
      "How do you decide when to challenge others respectfully?"
    ]
  },
  {
    "id": "generosity",
    "label": "Generosity",
    "description": "Willingness to share time, resources, or energy freely with others.",
    "type": "Benevolence",
    "group": "SelfTranscendence",
    "tags": ["giving", "support"],
    "strengths": "You create abundance through your acts of giving.",
    "dangers": "Unchecked generosity can lead to depletion or imbalance in relationships.",
    "reflectionQuestions": [
      "Where does your generosity feel most joyful?",
      "What boundaries help you give sustainably?"
    ]
  },
  {
    "id": "playfulness",
    "label": "Playfulness",
    "description": "Embracing fun, humor, and spontaneity in life.",
    "type": "Hedonism",
    "group": "SelfEnhancement",
    "tags": ["joy", "lightheartedness"],
    "strengths": "You bring energy and laughter to your environment.",
    "dangers": "Too much playfulness may undermine seriousness or responsibility.",
    "reflectionQuestions": [
      "When was the last time you felt truly playful?",
      "How do you balance fun with focus?"
    ]
  },
  {
    "id": "spontaneity",
    "label": "Spontaneity",
    "description": "Acting on impulse and embracing unexpected opportunities.",
    "type": "Stimulation",
    "group": "OpennessToChange",
    "tags": ["adventure", "freedom"],
    "strengths": "You seize moments and thrive on unpredictability.",
    "dangers": "Spontaneity without thought can cause disruption or regret.",
    "reflectionQuestions": [
      "What spontaneous choices have enriched your life?",
      "When does planning serve you better?"
    ]
  },
  {
    "id": "sensuality",
    "label": "Sensuality",
    "description": "Enjoying physical pleasure and sensory experiences.",
    "type": "Hedonism",
    "group": "SelfEnhancement",
    "tags": ["sensory", "pleasure"],
    "strengths": "You appreciate the richness of sensory experiences.",
    "dangers": "Sensuality focused only on pleasure can lead to overindulgence.",
    "reflectionQuestions": [
      "How do you enjoy sensory experiences mindfully?",
      "When might you balance indulgence with discipline?"
    ]
  },
  {
    "id": "obedience",
    "label": "Obedience",
    "description": "Respecting authority and rules to maintain order.",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["order", "discipline"],
    "strengths": "You help maintain social harmony through respect for rules.",
    "dangers": "Blind obedience may suppress critical thinking.",
    "reflectionQuestions": [
      "When does obedience serve you well?",
      "When might questioning be important?"
    ]
  },
  {
    "id": "self_control",
    "label": "Self-Control",
    "description": "Exercising restraint and discipline in your actions and impulses.",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["discipline", "restraint"],
    "strengths": "You maintain focus and avoid impulsive decisions.",
    "dangers": "Excessive self-control can suppress spontaneity and joy.",
    "reflectionQuestions": [
      "How do you practice self-control?",
      "When might loosening control be beneficial?"
    ]
  },
  {
    "id": "competence",
    "label": "Competence",
    "description": "Feeling capable and effective in your tasks and roles.",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["skill", "confidence"],
    "strengths": "You take pride in doing things well and continually growing.",
    "dangers": "Overemphasis on competence can lead to perfectionism or fear of failure.",
    "reflectionQuestions": [
      "What makes you feel truly competent?",
      "How do you stay open to learning while striving to excel?"
    ]
  },
  {
    "id": "fun",
    "label": "Fun",
    "description": "Enjoying activities that bring joy, play, and amusement.",
    "type": "Hedonism",
    "group": "SelfEnhancement",
    "tags": ["joy", "laughter"],
    "strengths": "You bring lightness and enjoyment into your own and others' lives.",
    "dangers": "Prioritizing fun at the wrong time may cause distraction or irresponsibility.",
    "reflectionQuestions": [
      "What activities make you lose track of time in a good way?",
      "How do you balance fun with other priorities?"
    ]
  },
  {
    "id": "authority",
    "label": "Authority",
    "description": "Having recognized power or control in a group or setting.",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["leadership", "control"],
    "strengths": "You are comfortable leading and taking charge when needed.",
    "dangers": "Seeking authority without listening can harm collaboration or trust.",
    "reflectionQuestions": [
      "In what situations do you feel naturally authoritative?",
      "How do you use power in ways that support others?"
    ]
  },
  {
    "id": "personal_security",
    "label": "Personal Security",
    "description": "Ensuring safety, health, and stability in your daily life.",
    "type": "Security",
    "group": "Conservation",
    "tags": ["safety", "wellbeing"],
    "strengths": "You protect your wellbeing and create a solid foundation for growth.",
    "dangers": "Over-focusing on security can lead to risk-aversion or stagnation.",
    "reflectionQuestions": [
      "What makes you feel most secure?",
      "When does protecting yourself limit growth?"
    ]
  },
  {
    "id": "dominance",
    "label": "Dominance",
    "description": "Asserting influence or control in competitive situations.",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["assertiveness", "strength"],
    "strengths": "You step forward with strength when leadership or protection is needed.",
    "dangers": "Dominance can become forceful or oppressive if not balanced with empathy.",
    "reflectionQuestions": [
      "Where does your assertiveness bring value?",
      "How do you lead without overpowering?"
    ]
  },
  {
    "id": "wealth",
    "label": "Wealth",
    "description": "Desiring material abundance, comfort, and financial independence.",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["prosperity", "resources"],
    "strengths": "You create and manage resources to support goals and security.",
    "dangers": "Focusing solely on wealth may impact relationships or inner fulfillment.",
    "reflectionQuestions": [
      "What does wealth enable in your life?",
      "Where does your desire for abundance align or conflict with your values?"
    ]
  },
  {
    "id": "cultural_heritage",
    "label": "Cultural Heritage",
    "description": "Honoring traditions, ancestry, and collective memory.",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["roots", "legacy"],
    "strengths": "You carry forward the richness of culture and history.",
    "dangers": "Strict attachment to heritage may limit openness to change.",
    "reflectionQuestions": [
      "Which parts of your culture are most meaningful to you?",
      "How do you balance tradition with personal evolution?"
    ]
  },
  {
    "id": "respect_for_elders",
    "label": "Respect for Elders",
    "description": "Recognizing the wisdom, experience, and value of older generations.",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["wisdom", "continuity"],
    "strengths": "You learn from and uplift those who came before you.",
    "dangers": "Respect may become obedience if not guided by discernment.",
    "reflectionQuestions": [
      "Who has shaped your perspective through lived experience?",
      "How do you carry forward their insights?"
    ]
  }
];

export const valueById: Record<string, IValue> = values.reduce((acc, value) => {
  acc[value.id] = value;
  return acc;
}, {});
