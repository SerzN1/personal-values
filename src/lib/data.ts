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

export const valueTypes: Record<string, IValueType> = {
  SelfDirection: {
    label: 'Self-Direction',
    description: 'Independent thought and action; choosing, creating, exploring.',
    iconSvg: selfDirectionIcon,
    color: '#4a5fd5',          // Indigo (self-leadership)
    background: "rgb(63, 81, 181)"
  },
  Universalism: {
    label: 'Universalism',
    description: 'Understanding, appreciation, tolerance, and protection for the welfare of all people and for nature.',
    iconSvg: universalizmIcon,
    color: '#00a58e',          // Teal
    background: "rgb(0, 191, 165)", // Same as Self-Transcendence
  },
  Stimulation: {
    label: 'Stimulation',
    description: 'Excitement, novelty, and challenge in life.',
    iconSvg: stimulationIcon,
    color: '#FF6D00',          // Vivid orange (intensity)
    background: "rgb(255, 109, 0)",       // Slightly more vivid
  },
  Hedonism: {
    label: 'Hedonism',
    description: 'Pleasure and sensuous gratification for oneself.',
    iconSvg: hedonismIcon,
    color: '#EC407A',          // Raspberry pink (pleasure)
    background: "rgb(236, 64, 122)",      // Pink/magenta
  },
  Achievement: {
    label: 'Achievement',
    description: 'Personal success through demonstrating competence according to social standards.',
    iconSvg: achievementIcon,
    color: '#c6851d',          // Mustard orange (success tone)
    background: "rgb(255, 193, 7)",       // Slightly softer gold
  },
  Power: {
    label: 'Power',
    description: 'Social status and prestige, control or dominance over people and resources.',
    iconSvg: powerIcon,
    color: '#E53935',          // Red (dominance, impact)
    background: "rgb(229, 57, 53)",       // Deep red
  },
  Security: {
    label: 'Security',
    description: 'Safety, harmony, and stability of society, of relationships, and of self.',
    iconSvg: securityIcon,
    color: '#546E7A',          // Deep slate (protection)
    background: "rgb(96, 125, 139)",      // Same as Conservation
  },
  Conformity: {
    label: 'Conformity',
    description: 'Restraint of actions, inclinations, and impulses likely to upset or harm others and violate social expectations or norms.',
    iconSvg: conformityIcon,
    color: '#5C6BC0',          // Cool blue-violet (structure)
    background: "rgb(92, 107, 192)",      // Muted purple-blue
  },
  Tradition: {
    label: 'Tradition',
    description: 'Respect, commitment, and acceptance of the customs and ideas that traditional culture or religion provide.',
    iconSvg: traditionIcon,
    color: '#8D6E63',          // Earthy brown (heritage)
    background: "rgb(141, 110, 99)",      // Dusty brown
  },
  Benevolence: {
    label: 'Benevolence',
    description: 'Preserving and enhancing the welfare of those with whom one is in frequent personal contact.',
    iconSvg: benevolenceIcon,
    color: '#43A047',          // Balanced green
    background: "rgb(216, 67, 21)",       // Warm reddish-orange
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
    color: "#00BFA5", // Strong teal (trust, care)
    backgroundColor: "rgba(0, 191, 165, 0.12)"
  },
  SelfEnhancement: {
    label: "Self-Enhancement",
    summary: "personal ambition, success, and influence",
    insights: [
      "You may feel driven by achievement, recognition, and autonomy.",
      "A focus on success can be energizing, but balance with care for others helps relationships thrive."
    ],
    color: '#FFC400', // Golden yellow (achievement)
    backgroundColor: "rgba(255, 196, 0, 0.12)", // Vibrant gold
  },
  OpennessToChange: {
    label: "Openness to Change",
    summary: "freedom, creativity, and exploration",
    insights: [
      "You likely enjoy exploring, learning, and expressing your individuality.",
      "This drive supports innovation, but may resist routine or stability."
    ],
    color: '#FF8A00', // Orange (creativity, exploration)
    backgroundColor: "rgba(255, 138, 0, 0.12)",       // Bright orange
  },
  Conservation: {
    label: "Conservation",
    summary: "security, structure, and tradition",
    insights: [
      "You value order, safety, and traditions that create predictability.",
      "This can build strong foundations, but may reduce openness to change or risk."
    ],
    color: '#607D8B', // Muted blue-gray (stability)
    backgroundColor: "rgba(96, 125, 139, 0.12)",      // Neutral slate
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
    "insight": "Freedom is not just about choice—it's about owning the direction of your life. For leaders, it means shaping environments where others can also thrive independently.",
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
    "insight": "True independence involves knowing when to trust yourself and when to seek input from others. This balance deepens your effectiveness as a leader and strengthens your relationships.",
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
  },
  {
    "id": "enjoyment",
    "label": "Enjoyment",
    "description": "Finding joy and pleasure in life’s moments, big and small.",
    "insight": "Enjoyment is about making space for fun and positivity in your life, allowing yourself to truly savor joyful experiences. It’s not just fleeting happiness, but a way to recharge, connect with others, and nourish your spirit. By embracing enjoyment, you create meaningful memories that uplift you and build resilience for life’s challenges.",
    "type": "Hedonism",
    "group": "OpennessToChange",
    "tags": ["pleasure", "joy", "well-being"],
    "strengths": "Your ability to appreciate joyful moments spreads positivity and lightens the atmosphere around you. This not only supports your own well-being but also fosters connection and resilience in your relationships.",
    "dangers": "If you focus too much on enjoyment, you may avoid necessary challenges or delay important responsibilities. Balancing joy with discipline helps you stay grounded and productive.",
    "reflectionQuestions": [
      "What moments bring you the most joy, and how can you invite more of them into your day?",
      "How do you balance seeking enjoyment with pursuing your long-term goals?"
    ]
  },
  {
    "id": "gratification",
    "label": "Gratification",
    "description": "Rewarding yourself to honor your efforts and maintain motivation.",
    "insight": "Gratification is the practice of acknowledging your hard work by treating yourself with kindness and reward. It nurtures your motivation and helps sustain your energy over time. Recognizing achievements, big or small, encourages you to keep moving forward with confidence and balance.",
    "type": "Hedonism",
    "group": "OpennessToChange",
    "tags": ["reward", "self-care", "motivation"],
    "strengths": "By celebrating your progress, you create a positive feedback loop that energizes your efforts and builds resilience. This mindset encourages sustainable growth and self-compassion.",
    "dangers": "Over-reliance on immediate rewards can undermine patience or discipline. Keeping gratification aligned with your larger goals prevents distraction and impulsivity.",
    "reflectionQuestions": [
      "How do you decide when and how to reward yourself effectively?",
      "In what ways can you use gratification to support your long-term motivation?"
    ]
  },
  {
    "id": "success",
    "label": "Success",
    "description": "Achieving meaningful goals that reflect your values and talents.",
    "insight": "Success for you is more than just outcomes; it’s the fulfillment that comes from overcoming challenges and realizing your potential. It fuels your purpose and motivates you to grow. You take pride not only in personal achievements but also in the positive impact you create for others.",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["ambition", "achievement", "goals"],
    "strengths": "Your determination inspires persistence and focus. You set clear standards and lead by example, encouraging others to aim high and persevere.",
    "dangers": "An intense focus on success can cause burnout or strained relationships if not balanced with empathy and self-care. Remembering that success includes wellbeing and connection keeps your efforts sustainable.",
    "reflectionQuestions": [
      "What does success mean to you beyond titles or rewards?",
      "How do you maintain motivation when progress is slow or setbacks occur?"
    ]
  },
  {
    "id": "recognition",
    "label": "Recognition",
    "description": "Being seen and appreciated for your efforts and contributions.",
    "insight": "Recognition is a vital source of encouragement that helps build your confidence and sense of belonging. You value meaningful feedback and respect from others, which motivates you to grow and contribute your best.",
    "type": "Achievement",
    "group": "SelfEnhancement",
    "tags": ["validation", "appreciation", "respect"],
    "strengths": "You actively seek feedback and appreciate recognition, which fosters mutual respect and continuous improvement in yourself and others.",
    "dangers": "Relying too much on external validation can weaken your self-confidence when praise is absent. Developing inner assurance is essential for balance.",
    "reflectionQuestions": [
      "How do you celebrate achievements when recognition is limited?",
      "What helps you maintain confidence independent of others’ opinions?"
    ]
  },
  {
    "id": "leadership",
    "label": "Leadership",
    "description": "Guiding and inspiring others toward shared goals with empathy and vision.",
    "insight": "Leadership means more than authority—it’s about inspiring and empowering others to succeed together. You take responsibility for creating environments where people feel supported and motivated. Your leadership is grounded in integrity, clear communication, and genuine care.",
    "type": "Power",
    "group": "SelfEnhancement",
    "tags": ["influence", "responsibility", "vision"],
    "strengths": "You build trust by acting consistently with your values and encourage growth by supporting those you lead. Your ability to motivate inspires collective progress and meaningful achievements.",
    "dangers": "Leadership focused too much on control or personal gain can erode trust. Balancing authority with empathy and openness is key to sustaining positive influence.",
    "reflectionQuestions": [
      "How do you empower others while maintaining clear direction?",
      "What values guide your leadership decisions?"
    ]
  },
  {
    "id": "safety",
    "label": "Safety",
    "description": "Creating secure, stable environments that foster trust and confidence.",
    "insight": "Safety is the foundation that allows people to relax and take healthy risks. You prioritize building spaces where physical, emotional, and social security support growth and well-being. This creates trust and allows for greater innovation and connection.",
    "type": "Security",
    "group": "Conservation",
    "tags": ["protection", "stability", "trust"],
    "strengths": "You proactively identify risks and implement measures that create calm and reassurance, fostering environments where people can flourish.",
    "dangers": "Overemphasizing safety can lead to resistance to change or fear of uncertainty. Balancing caution with openness helps maintain adaptability.",
    "reflectionQuestions": [
      "What makes you feel safe and supported in your environments?",
      "How do you balance risk-taking with maintaining safety?"
    ]
  },
  {
    "id": "protection",
    "label": "Protection",
    "description": "Standing up for the well-being of yourself and those you care about.",
    "insight": "Protection means caring deeply about the safety and dignity of those around you. You take responsibility for shielding loved ones and communities from harm, creating spaces of trust and care. This dedication strengthens relationships and fosters a sense of belonging.",
    "type": "Security",
    "group": "Conservation",
    "tags": ["defense", "care", "support"],
    "strengths": "Your vigilance and willingness to support others create strong, dependable bonds. People feel safe and valued knowing you are ready to defend their interests.",
    "dangers": "Being overly protective can sometimes limit others’ growth or independence. Finding a balance between care and autonomy is important.",
    "reflectionQuestions": [
      "Who or what do you feel called to protect, and why?",
      "How do you encourage independence while providing support?"
    ]
  },
  {
    "id": "predictability",
    "label": "Predictability",
    "description": "Valuing routines and consistency to create stability and reduce uncertainty.",
    "insight": "Predictability helps you manage stress and plan effectively by creating a dependable framework for your life and work. You appreciate routines that offer clarity and reduce chaos, which supports focus and confidence.",
    "type": "Security",
    "group": "Conservation",
    "tags": ["stability", "routine", "consistency"],
    "strengths": "Your preference for reliability builds trust and makes it easier for you and others to perform consistently. Stability creates a strong foundation for growth and learning.",
    "dangers": "Clinging too tightly to predictability can hinder your ability to adapt to change or seize new opportunities. Cultivating flexibility alongside routine is essential.",
    "reflectionQuestions": [
      "What routines help you feel grounded and effective?",
      "How do you stay open and adaptable when surprises arise?"
    ]
  },
  {
    "id": "resilience",
    "label": "Resilience",
    "description": "Bouncing back from adversity with strength, optimism, and adaptability.",
    "insight": "Resilience means meeting challenges with courage and using setbacks as opportunities to grow. You cultivate a mindset that stays hopeful and solution-focused, inspiring both yourself and others to persevere.",
    "type": "Security",
    "group": "Conservation",
    "tags": ["adaptability", "strength", "perseverance"],
    "strengths": "Your inner strength helps you maintain momentum even in tough times. You find ways to learn and grow from difficulties, modeling endurance and positive attitude.",
    "dangers": "Sometimes relying too heavily on resilience can mask deeper issues or delay needed rest. Recognizing when to seek support ensures your strength is sustainable.",
    "reflectionQuestions": [
      "What personal resources help you recover and thrive after setbacks?",
      "When do you know it’s time to ask for help or pause for self-care?"
    ]
  },

  {
    "id": "self_discipline",
    "label": "Self-Discipline",
    "description": "Maintaining control and focus to follow through on goals and commitments.",
    "insight": "Self-discipline empowers you to keep commitments and resist distractions, even when motivation fades. This consistency builds trust in yourself and with others and creates a reliable foundation for success.",
    "type": "Conformity",
    "group": "Conservation",
    "tags": ["control", "responsibility", "focus"],
    "strengths": "Your dedication and focus help you achieve long-term goals and inspire others by example. You manage your impulses thoughtfully to stay aligned with your priorities.",
    "dangers": "Too much rigidity can cause stress or stifle creativity. Balancing discipline with flexibility and self-compassion supports lasting productivity and well-being.",
    "reflectionQuestions": [
      "How do you maintain your focus when motivation dips?",
      "In what ways does flexibility enhance your discipline?"
    ]
  },
  {
    "id": "devotion",
    "label": "Devotion",
    "description": "Showing loyalty and commitment to your values, relationships, and communities.",
    "insight": "Devotion is a steady, heartfelt dedication that builds deep connections and trust. You prioritize the well-being of what you care about and stand firm through challenges, creating a sense of belonging and purpose.",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["loyalty", "commitment", "faithfulness"],
    "strengths": "Your loyalty creates stable, supportive relationships that others rely on. Your commitment strengthens communities and sustains shared goals over time.",
    "dangers": "Devotion can sometimes limit openness to new perspectives or necessary change. Balancing loyalty with growth keeps your connections vibrant and meaningful.",
    "reflectionQuestions": [
      "What are the values or people you feel most devoted to?",
      "How do you balance loyalty with openness to new ideas?"
    ]
  },
  {
    "id": "respect_for_customs",
    "label": "Respect for Customs",
    "description": "Honoring traditions and cultural practices that build identity and community.",
    "insight": "Respecting customs helps you stay connected to your roots and shared values. You appreciate the continuity and meaning that traditions bring, fostering harmony and belonging.",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["culture", "heritage", "ritual"],
    "strengths": "Your respect for customs creates a strong foundation for social cohesion and shared identity. You help preserve meaningful practices that enrich your community.",
    "dangers": "Rigid adherence to customs may limit innovation or inclusiveness. Embracing adaptability while honoring tradition supports healthy evolution.",
    "reflectionQuestions": [
      "Which traditions matter most to you, and why?",
      "How do you adapt customs to stay relevant and welcoming?"
    ]
  },
  {
    "id": "faith",
    "label": "Faith",
    "description": "Drawing strength and guidance from spiritual or philosophical beliefs.",
    "insight": "Faith provides you with hope, meaning, and a moral compass. It supports resilience through life’s uncertainties and grounds your choices in deeply held values.",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["belief", "spirituality", "commitment"],
    "strengths": "Your faith inspires integrity and perseverance, helping you stay centered and hopeful even in difficult times. It also offers a source of inspiration for others.",
    "dangers": "Overly rigid beliefs might limit openness or adaptability. Staying open to diverse perspectives can deepen and enrich your faith.",
    "reflectionQuestions": [
      "How does your faith influence your everyday decisions?",
      "In what ways do you balance conviction with openness to new ideas?"
    ]
  },
  {
    "id": "ritual",
    "label": "Ritual",
    "description": "Using ceremonies and routines to express values and create connection.",
    "insight": "Rituals bring comfort, structure, and a sense of belonging. They help you mark important moments and express what matters deeply, creating shared meaning with others. Through consistent practice, rituals ground you and build community bonds that provide emotional safety and identity.",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["ceremony", "routine", "identity"],
    "strengths": "Your commitment to meaningful rituals fosters stability and nurtures relationships. Rituals serve as anchors that bring people together and offer moments of reflection and gratitude.",
    "dangers": "When rituals become too rigid, they may lose personal meaning or exclude others. Allowing flexibility and openness keeps rituals vibrant and inclusive.",
    "reflectionQuestions": [
      "Which rituals provide you with the most comfort and connection?",
      "How do you refresh or adapt rituals to keep them meaningful?"
    ]
  },
  {
    "id": "authenticity",
    "label": "Authenticity",
    "description": "Being true to yourself and expressing your genuine values and feelings openly.",
    "insight": "Authenticity means being true to who you really are—expressing your values, feelings, and beliefs honestly and openly. When you live authentically, you don’t feel the need to hide parts of yourself to fit in or please others. This genuine way of being helps build trust, deepen connections, and create meaningful relationships. It takes courage to show up as your real self, but it brings you peace and helps others see the real you.",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["genuineness", "integrity", "honesty"],
    "strengths": "When you embrace authenticity, you inspire others to do the same. Your openness creates safe spaces where people feel comfortable being themselves. Being true to yourself also gives you confidence and clarity in your choices, helping you stand firm even when things get tough.",
    "dangers": "Sometimes, being completely open can unintentionally hurt others or cause misunderstandings, especially if honesty isn’t paired with kindness. It’s important to balance truthfulness with empathy so that your authenticity brings people closer rather than pushing them away.",
    "reflectionQuestions": [
      "When do you feel most like your true self, and what helps you stay that way?",
      "How do you find the right balance between honesty and kindness in your interactions?"
    ]
  },
  {
    "id": "exploration",
    "label": "Exploration",
    "description": "Seeking out new experiences and learning through discovery.",
    "insight": "Exploration reflects your curiosity and your drive to expand your horizons—whether through travel, learning, new ideas, or unfamiliar perspectives. You thrive on stepping into the unknown and allowing uncertainty to fuel growth. This openness allows you to evolve and reimagine possibilities, both personally and professionally.",
    "type": "SelfDirection",
    "group": "OpennessToChange",
    "tags": ["curiosity", "growth", "learning"],
    "strengths": "Your openness invites creativity and helps you adapt quickly to change. You’re eager to test boundaries and innovate, which leads to new discoveries and personal growth.",
    "dangers": "Restlessness or lack of focus may arise if you pursue too many directions at once. Intention and reflection can help ground your explorations.",
    "reflectionQuestions": [
      "What new experiences are calling you lately?",
      "How do you decide where to explore next—internally or externally?"
    ]
  },
  {
    "id": "belonging",
    "label": "Belonging",
    "description": "Feeling connected, accepted, and valued within a group or community.",
    "insight": "Belonging fulfills a deep human need for connection and acceptance. You cultivate inclusive environments where people feel safe to express themselves and collaborate authentically. This sense of community nurtures well-being and mutual support.",
    "type": "Tradition",
    "group": "Conservation",
    "tags": ["connection", "community", "acceptance"],
    "strengths": "Your focus on belonging helps build warm and supportive spaces where individuals thrive. You encourage openness and foster relationships based on trust and respect.",
    "dangers": "A strong desire to belong may lead to compromising your identity or values. Practicing self-awareness helps you stay grounded while connecting with others.",
    "reflectionQuestions": [
      "What makes you feel truly included and accepted?",
      "When have you compromised your voice to fit in—and how might you do it differently now?"
    ]
  }
];

export const valueById: Record<string, IValue> = values.reduce((acc, value) => {
  acc[value.id] = value;
  return acc;
}, {});


export const valueInsights: Record<string, string> = {
  curiosity: "Curiosity encourages you to venture beyond the familiar, engaging with questions that deepen your understanding of yourself and the world. As a leader, fostering curiosity not only fuels continuous personal and professional growth but also cultivates an environment where innovation thrives, inspiring your team to explore new horizons thoughtfully and purposefully.",
  creativity: "Creativity empowers you to transform imagination into meaningful action, challenging conventional boundaries with original thought. Leadership rooted in creativity balances visionary ideas with practical execution, fostering a culture that embraces experimentation, learns from failure, and continuously evolves through inspired problem-solving.",
  "self-expression": "Authentic self-expression is a courageous act of revealing your true values, emotions, and perspectives. For leaders, this transparency builds trust and deep connection while demanding empathy and awareness of how your words and actions influence those around you. Your self-expression shapes the culture and invites others to bring their whole selves to the table.",
  excitement: "Excitement is the emotional energy that signals passion and engagement, driving you toward meaningful challenges and new experiences. Effective leaders harness this energy mindfully, balancing enthusiasm with sustainable practices to maintain motivation and inspire others without risking burnout or distraction.",
  adventure: "Adventure invites you to embrace uncertainty and boldly step into the unknown, fostering growth through risk-taking and resilience. Leadership that embraces adventure models courage, encouraging others to push past comfort zones with clear vision and calculated judgment to navigate challenges with confidence.",
  novelty: "Novelty sparks fresh perspectives and rejuvenates stale patterns but requires discernment to maintain focus and depth. As a leader, knowing when to introduce new ideas and when to consolidate progress is crucial for sustaining momentum and ensuring meaningful, lasting impact.",
  energy: "Energy reflects your vitality, influence, and capacity to lead with presence. Wise leaders manage their energy deliberately—knowing when to amplify momentum and when to step back for restoration—modeling resilience and steadiness that empower teams to perform sustainably over time.",
  challenge: "Challenge serves as a catalyst for personal and collective growth by pushing boundaries and encouraging perseverance. Leadership that embraces challenge fosters a growth mindset, balancing ambition with compassion to maintain motivation while recognizing limits to avoid overwhelm and burnout.",
  achievement: "Achievement validates competence and progress, reinforcing self-efficacy and purpose. Leaders who celebrate achievement thoughtfully inspire continued excellence while maintaining balance, ensuring that success fuels collective morale and long-term fulfillment rather than narrow goal fixation.",
  ambition: "Ambition is the driving force that propels purposeful advancement and visionary goal-setting. Balanced ambition connects you to your core values and motivates you to elevate both yourself and those you lead, nurturing a shared vision while preventing the pitfalls of unchecked competitiveness or burnout.",
  influence: "Influence is the power to shape outcomes through presence, voice, and integrity. Effective leadership channels influence to inspire, empower, and cultivate shared ownership, fostering collaboration and trust rather than control or coercion, thus building lasting, positive impact.",
  status: "Status can motivate excellence and social recognition but risks overshadowing authentic purpose if pursued narrowly. Grounded leaders balance their drive for status with humility and genuine service, maintaining self-awareness and aligning ambition with meaningful contributions beyond external validation.",
  control: "Control offers clarity and order amidst complexity but must be balanced with openness to change and trust in others. Leadership that wields control wisely creates structured environments that foster creativity and adaptability, avoiding rigidity and encouraging emergent opportunities for growth.",
  pleasure: "Pleasure enriches life by bringing joy, comfort, and balance. Leaders who prioritize well-being model the importance of integrating rest and delight with dedication, fostering environments where people thrive holistically rather than through relentless output alone.",
  stability: "Stability provides a secure foundation essential for confidence and sustainable growth. Effective leadership embraces stability while remaining vigilant to opportunities for necessary change and innovation, avoiding stagnation by balancing continuity with adaptive flexibility.",
  order: "Order creates clarity and predictability that enable coordinated action and trust. Leaders who balance structure with flexibility maintain environments where processes support innovation and responsiveness, ensuring systems serve people rather than constrain creativity.",
  loyalty: "Loyalty builds deep trust and strengthens bonds within communities or teams. Thoughtful leadership honors commitments while remaining open to growth and evolution, recognizing when loyalty nurtures cohesion and when it may require reassessment to foster healthy progress.",
  responsibility: "Responsibility anchors leadership in accountability, dependability, and ethical action. Wise leaders know when to take charge and when to delegate, balancing care for others with self-management to prevent overload while ensuring commitments are met with integrity.",
  humility: "Humility opens space for learning, growth, and genuine connection by acknowledging limitations and valuing others’ contributions. Leaders who cultivate humility create inclusive cultures where diverse perspectives are respected and collective wisdom flourishes.",
  tradition: "Tradition connects you to shared history and cultural meaning, providing grounding and continuity. Leadership honors tradition thoughtfully, discerning which practices preserve identity and which may need evolution to remain relevant and inclusive in changing contexts.",
  empathy: "Empathy deepens understanding and fosters genuine connection by tuning into others’ experiences and emotions. Effective leaders balance empathy with healthy boundaries, creating trust and support while safeguarding their own emotional resilience.",
  kindness: "Kindness is an active expression of care and goodwill that nurtures cooperation and loyalty. Leaders who lead with kindness inspire positive relationships and foster cultures of mutual respect and generosity, strengthening teams and communities alike.",
  helpfulness: "Helpfulness reflects a commitment to support and uplift others, enhancing collective strength. Leaders who embody helpfulness balance generosity with self-care, ensuring their assistance empowers others without fostering dependency, thereby cultivating sustainable, resilient teams.",
  equality: "Equality embodies a dedication to fairness and justice, advocating for equal opportunities and respect. Leadership grounded in equality challenges biases and systemic barriers, creating inclusive environments where every voice is valued and diverse talents can flourish.",
  sustainability: "Sustainability calls for long-term thinking and stewardship of resources, honoring the impact of today’s choices on future generations. Leaders who prioritize sustainability inspire responsibility beyond immediate goals, fostering cultures that value ethical impact alongside performance.",
  openness: "Openness to others invites curiosity and respect for diverse perspectives, enriching understanding and innovation. Effective leadership embraces openness while maintaining clarity of values, creating inclusive spaces where dialogue and growth thrive without losing purpose.",
  justice: "Justice demands commitment to fairness, integrity, and moral courage. Leaders who uphold justice stand firm against inequity, balancing conviction with diplomacy to resolve conflicts constructively and build trust through ethical consistency.",
  compassion: "Compassion connects deeply with others’ suffering, motivating meaningful support and care. Leadership with compassion balances emotional presence with healthy boundaries, preventing burnout while cultivating cultures of empathy, resilience, and mutual aid.",
  community: "Community represents shared responsibility, belonging, and cooperation that strengthen collective well-being. Leaders who nurture community foster collaboration and inclusiveness, balancing group cohesion with respect for individual needs and contributions.",
  respect: "Respect honors the dignity and rights of others, fostering trust and civility. Leadership grounded in respect actively listens, acknowledges differences, and addresses conflicts constructively, modeling integrity and fairness in all interactions.",
  generosity: "Generosity embodies a willingness to share resources, time, and energy freely to create abundance. Leaders who practice generosity inspire goodwill and collaboration, while mindful boundaries ensure sustainable giving that preserves their own capacity.",
  playfulness: "Playfulness brings joy, spontaneity, and lightheartedness that refresh energy and creativity. Leaders who embrace playfulness foster positive environments where innovation and resilience flourish through balance between seriousness and fun.",
  spontaneity: "Spontaneity encourages embracing the unexpected and acting with agility. Effective leaders balance spontaneous action with thoughtful planning, harnessing flexibility to seize opportunities while minimizing unnecessary disruption.",
  sensuality: "Sensuality invites mindful appreciation of physical and sensory experiences, enriching life’s richness. Leadership that acknowledges sensuality models holistic well-being, reminding teams of the importance of balance between work, rest, and pleasure.",
  obedience: "Obedience reflects respect for authority and order that maintains social harmony. Leaders understand when following rules preserves stability, while also recognizing when principled questioning is essential to growth and ethical leadership.",
  self_control: "Self-control provides discipline and restraint to focus efforts and maintain integrity. Leaders cultivate self-control to navigate pressures and impulses wisely, fostering environments where responsible behavior supports shared goals and trust.",
  competence: "Competence reflects confidence and mastery in one’s roles and responsibilities. Leadership rooted in competence inspires trust and credibility, balancing continual learning with humility to adapt and grow alongside evolving challenges.",
  fun: "Fun introduces joy and amusement that invigorate motivation and team morale. Leaders who incorporate fun create positive, engaging cultures that balance productivity with well-being, recognizing that enjoyment fuels sustained performance.",
  authority: "Authority confers recognized power and responsibility to lead and make decisions. Effective leaders wield authority with accountability and empathy, using their position to empower others, build trust, and foster collaborative success.",
  personal_security: "Personal security establishes safety and stability necessary for focus and growth. Leaders create environments where physical and psychological security allow teams to take risks and innovate with confidence and support.",
  dominance: "Dominance asserts strength and influence in competitive situations. Balanced leadership tempers dominance with empathy and collaboration, ensuring assertiveness serves collective goals rather than personal power or control.",
  wealth: "Wealth enables freedom of choice and resources to support goals and well-being. Leaders who pursue wealth thoughtfully align material success with ethical responsibility and holistic fulfillment, recognizing the broader impact of their prosperity.",
  cultural_heritage: "Cultural heritage connects identity to shared roots and collective memory, enriching perspective. Leaders honor heritage to build continuity and respect, while encouraging openness to new ideas that keep cultures vibrant and relevant.",
  respect_for_elders: "Respect for elders acknowledges the wisdom and experience of previous generations. Leadership that values this respect blends tradition with innovation, learning from the past to inform ethical, forward-thinking decisions."
}
