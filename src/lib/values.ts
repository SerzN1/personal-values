// TypeScript interface and sample data for personal values

export interface IValue {
  name: string;
  synonyms: string[];
  info: string;
  strengths: string;
  dangers: string;
  image: string; // path to image asset
  group: string; // new property for grouping values
}


/**

Co-operative
Autonomy
Perfection
Clarity
Sociable
Personal authority
Lively
Efficiency
Trustworthy
Independence
Fun/Humour
Simplicity
Loyal
Freedom
Choices
Close
Individuality
Flexibility
Warm
Unpredictable
Profit driven
Family
Conformity
Financial reward
Affection
Originality
Pay & bonuses
Friendships
Ingenuity
Money
Camaraderie
Unconstrained
Guide
Love
Risk
Govern
Responsibility
Adventure
Influence
Tolerant
Experiment
Participation
Caring
Dynamic
Learning
Helping
Competitive
Intellectually Challenging
Nurturing?
Energetic
Stimulating
Empathise
Innovation
Respect
Generous
Expert
Reward
Sharing
Professional
Praise
Solidarity
Novelty
Recognition
Supporting
Brave
Appreciation
Compassion
Proficiency
Settled
Superiority
Predictable
People Oriented
Social
Competence
Safe
Open
Structure
Secure Orderly
Organisation

 */
export const values: IValue[] = [
  {
    name: 'Co-operative',
    synonyms: ['Collaborative', 'Team player'],
    info: 'Actively seeks to work with others, values shared responsibility, and believes that group success is more important than individual achievement. Enjoys consensus-building and is comfortable compromising for the greater good.',
    strengths: 'Excels in team environments, quickly builds trust, and helps resolve conflicts. Can unite people with different perspectives and keep projects moving forward.',
    dangers: 'May avoid necessary confrontation, suppress personal opinions, or become frustrated when others do not reciprocate cooperation. Can be taken advantage of by less collaborative individuals.',
    image: '/assets/cooperative.png',
    group: 'benevolence',
  },
  {
    name: 'Autonomy',
    synonyms: ['Independence', 'Self-sufficiency'],
    info: 'Prefers to make decisions independently, values freedom from external control, and is motivated by self-direction. Dislikes micromanagement and seeks opportunities to chart their own course.',
    strengths: 'Highly self-motivated, resourceful, and able to work without supervision. Often pioneers new approaches and is comfortable with responsibility.',
    dangers: 'Can resist collaboration, ignore valuable input, or become isolated. May struggle in highly structured or hierarchical environments.',
    image: '/assets/autonomy.png',
    group: 'self-direction',
  },
  {
    name: 'Perfection',
    synonyms: ['Excellence', 'Flawlessness'],
    info: 'Sets extremely high standards for self and others, is detail-oriented, and strives for error-free results. Notices flaws others miss and is rarely satisfied with “good enough.”',
    strengths: 'Delivers high-quality work, catches mistakes before they become problems, and inspires others to improve. Maintains rigorous standards in all tasks.',
    dangers: 'Can become overly critical, delay completion due to constant revisions, and experience stress or burnout. May have difficulty delegating or accepting imperfection in others.',
    image: '/assets/perfection.png',
    group: 'achievement',
  },
  {
    name: 'Clarity',
    synonyms: ['Transparency', 'Understanding'],
    info: 'Seeks clear communication, well-defined goals, and unambiguous expectations. Dislikes confusion, hidden agendas, or vague instructions.',
    strengths: 'Quickly identifies misunderstandings, ensures everyone is on the same page, and reduces errors caused by miscommunication. Helps teams move forward with confidence.',
    dangers: 'May become frustrated in uncertain or rapidly changing situations. Can be perceived as rigid or demanding excessive detail.',
    image: '/assets/clarity.png',
    group: 'conformity',
  },
  {
    name: 'Sociable',
    synonyms: ['Outgoing', 'Friendly'],
    info: 'Enjoys meeting new people, thrives in group settings, and is energized by social interaction. Finds it easy to start conversations and build rapport.',
    strengths: 'Builds strong networks, creates a positive atmosphere, and helps others feel included. Often acts as a connector between people and groups.',
    dangers: 'May struggle with solitude, avoid necessary focus, or neglect deeper relationships in favor of breadth.',
    image: '/assets/sociable.png',
    group: 'benevolence',
  },
  {
    name: 'Personal authority',
    synonyms: ['Self-leadership', 'Empowerment'],
    info: 'Values having control over their own actions and decisions, and prefers to set their own direction. Dislikes being told what to do and is confident in their judgment.',
    strengths: 'Takes initiative, stands up for personal beliefs, and is not easily swayed by peer pressure. Inspires others to take responsibility for themselves.',
    dangers: 'Can be perceived as stubborn, uncooperative, or dismissive of others’ input. May struggle in roles requiring strict adherence to external rules.',
    image: '/assets/personal_authority.png',
    group: 'power',
  },
  {
    name: 'Lively',
    synonyms: ['Energetic', 'Vibrant'],
    info: 'Brings enthusiasm and energy to activities, enjoys being active, and often motivates others to participate. Finds joy in movement and variety.',
    strengths: 'Inspires action, keeps morale high, and helps teams overcome inertia. Adapts quickly to new situations.',
    dangers: 'May become restless, have trouble with routine, or distract others. Can struggle with tasks requiring sustained focus.',
    image: '/assets/lively.png',
    group: 'stimulation',
  },
  {
    name: 'Efficiency',
    synonyms: ['Productivity', 'Effectiveness'],
    info: 'Focuses on achieving results with minimal wasted effort or resources. Constantly seeks ways to streamline processes and eliminate bottlenecks.',
    strengths: 'Delivers results quickly, optimizes workflows, and increases organizational productivity.',
    dangers: 'May cut corners, overlook quality, or become impatient with slower colleagues.',
    image: '/assets/efficiency.png',
    group: 'achievement',
  },
  {
    name: 'Trustworthy',
    synonyms: ['Reliable', 'Dependable'],
    info: 'Consistently keeps promises, maintains confidentiality, and acts with integrity. Others feel safe confiding in and relying on them.',
    strengths: 'Builds deep trust, strengthens teams, and is often chosen for sensitive or important tasks.',
    dangers: 'May be overburdened by others’ expectations or taken for granted.',
    image: '/assets/trustworthy.png',
    group: 'security',
  },
  {
    name: 'Independence',
    synonyms: ['Self-reliance', 'Autonomy'],
    info: 'Prefers to act and think without undue influence from others. Enjoys solving problems alone and values self-sufficiency.',
    strengths: 'Quick to take initiative, adapts well to new challenges, and is comfortable working alone.',
    dangers: 'Can become isolated, resist help, or miss out on valuable collaboration.',
    image: '/assets/independence.png',
    group: 'self-direction',
  },
  {
    name: 'Fun/Humour',
    synonyms: ['Playfulness', 'Joy'],
    info: 'Values laughter, fun, and a light-hearted approach to life. Uses humor to diffuse tension and connect with others.',
    strengths: 'Reduces stress, builds camaraderie, and helps teams recover from setbacks.',
    dangers: 'May avoid serious issues, use humor inappropriately, or struggle with tasks requiring seriousness.',
    image: '/assets/fun.png',
    group: 'hedonism',
  },
  {
    name: 'Simplicity',
    synonyms: ['Minimalism', 'Clarity'],
    info: 'Prefers straightforwardness, avoids unnecessary complexity, and seeks to make life as uncomplicated as possible.',
    strengths: 'Reduces stress, increases focus, and helps others see the essence of an issue.',
    dangers: 'May overlook important details, resist necessary change, or oversimplify complex problems.',
    image: '/assets/simplicity.png',
    group: 'conformity',
  },
  {
    name: 'Loyal',
    synonyms: ['Faithful', 'Devoted'],
    info: 'Remains committed to people, causes, or organizations even in difficult times. Values long-term relationships and consistency.',
    strengths: 'Builds trust, provides stability, and is a source of support for others.',
    dangers: 'May stay in unhealthy situations out of obligation or resist necessary change.',
    image: '/assets/loyal.png',
    group: 'benevolence',
  },
  {
    name: 'Freedom',
    synonyms: ['Liberty', 'Autonomy'],
    info: 'Values the ability to act, speak, or think without restraint. Seeks opportunities to express individuality and resist constraints.',
    strengths: 'Encourages creativity, innovation, and self-expression.',
    dangers: 'May resist necessary structure, rules, or commitments.',
    image: '/assets/freedom.png',
    group: 'self-direction',
  },
  {
    name: 'Choices',
    synonyms: ['Options', 'Alternatives'],
    info: 'Appreciates having multiple options and the ability to choose. Dislikes feeling trapped or forced into decisions.',
    strengths: 'Empowers decision-making, increases adaptability, and fosters a sense of control.',
    dangers: 'Too many choices can cause indecision, anxiety, or regret.',
    image: '/assets/choices.png',
    group: 'self-direction',
  },
  {
    name: 'Close',
    synonyms: ['Intimate', 'Connected'],
    info: 'Values deep, meaningful relationships and emotional closeness with others. Seeks to build trust and share personal experiences.',
    strengths: 'Forms strong bonds, provides emotional support, and fosters loyalty.',
    dangers: 'May become overly dependent or struggle with boundaries.',
    image: '/assets/close.png',
    group: 'benevolence',
  },
  {
    name: 'Individuality',
    synonyms: ['Uniqueness', 'Distinctiveness'],
    info: 'Emphasizes being true to oneself and expressing personal identity, even if it means standing out from the crowd.',
    strengths: 'Encourages creativity, self-confidence, and innovation.',
    dangers: 'May lead to isolation or difficulty fitting in with groups.',
    image: '/assets/individuality.png',
    group: 'self-direction',
  },
  {
    name: 'Flexibility',
    synonyms: ['Adaptability', 'Versatility'],
    info: 'Willing to adjust plans and approaches as circumstances change. Comfortable with ambiguity and new situations.',
    strengths: 'Handles change well, finds creative solutions, and remains calm under pressure.',
    dangers: 'May lack consistency or struggle to commit to decisions.',
    image: '/assets/flexibility.png',
    group: 'self-direction',
  },
  {
    name: 'Warm',
    synonyms: ['Affectionate', 'Friendly'],
    info: 'Expresses kindness and genuine care for others. Creates a welcoming and supportive environment.',
    strengths: 'Builds trust, encourages openness, and helps others feel valued.',
    dangers: 'May be perceived as overly emotional or have difficulty setting boundaries.',
    image: '/assets/warm.png',
    group: 'benevolence',
  },
  {
    name: 'Unpredictable',
    synonyms: ['Spontaneous', 'Impulsive'],
    info: 'Enjoys surprises and embraces change. Finds excitement in the unexpected and resists routine.',
    strengths: 'Brings energy and creativity, adapts quickly to new situations.',
    dangers: 'May cause instability or disrupt plans for others.',
    image: '/assets/unpredictable.png',
    group: 'stimulation',
  },
  {
    name: 'Profit driven',
    synonyms: ['Commercial', 'Results-oriented'],
    info: 'Focuses on financial gain and business success. Makes decisions based on profitability and return on investment.',
    strengths: 'Drives growth, ensures sustainability, and rewards achievement.',
    dangers: 'May prioritize profit over ethics or relationships.',
    image: '/assets/profit_driven.png',
    group: 'achievement',
  },
  {
    name: 'Family',
    synonyms: ['Kin', 'Relatives'],
    info: 'Prioritizes family relationships, traditions, and responsibilities. Finds meaning in supporting and caring for loved ones.',
    strengths: 'Provides stability, unconditional support, and a sense of belonging.',
    dangers: 'May neglect personal needs or struggle with work-life balance.',
    image: '/assets/family.png',
    group: 'benevolence',
  },
  {
    name: 'Conformity',
    synonyms: ['Compliance', 'Conventionality'],
    info: 'Values fitting in, following rules, and maintaining social harmony. Prefers established norms and avoids standing out.',
    strengths: 'Promotes order, reduces conflict, and helps groups function smoothly.',
    dangers: 'May suppress individuality or resist necessary change.',
    image: '/assets/conformity.png',
    group: 'conformity',
  },
  {
    name: 'Financial reward',
    synonyms: ['Pay', 'Bonuses', 'Money'],
    info: 'Motivated by earning money and receiving tangible rewards for achievements.',
    strengths: 'Encourages hard work, ambition, and goal-setting.',
    dangers: 'May focus on material gain at the expense of other values.',
    image: '/assets/financial_reward.png',
    group: 'achievement',
  },
  {
    name: 'Affection',
    synonyms: ['Fondness', 'Tenderness'],
    info: 'Enjoys expressing and receiving love, care, and physical closeness.',
    strengths: 'Strengthens relationships, builds trust, and provides emotional security.',
    dangers: 'May become dependent on others for validation or struggle with rejection.',
    image: '/assets/affection.png',
    group: 'benevolence',
  },
  {
    name: 'Originality',
    synonyms: ['Innovation', 'Creativity'],
    info: 'Values new ideas, unique perspectives, and creative expression. Enjoys challenging the status quo.',
    strengths: 'Drives progress, inspires others, and finds novel solutions.',
    dangers: 'May struggle with routine or disregard practical constraints.',
    image: '/assets/originality.png',
    group: 'self-direction',
  },
  {
    name: 'Pay & bonuses',
    synonyms: ['Compensation', 'Incentives'],
    info: 'Seeks financial recognition for effort and achievement. Motivated by tangible rewards.',
    strengths: 'Encourages high performance and goal attainment.',
    dangers: 'May prioritize short-term gain over long-term fulfillment.',
    image: '/assets/pay_bonuses.png',
    group: 'achievement',
  },
  {
    name: 'Friendships',
    synonyms: ['Camaraderie', 'Alliances'],
    info: 'Values close, supportive relationships with peers. Enjoys spending time with friends and building social networks.',
    strengths: 'Provides emotional support, reduces stress, and increases happiness.',
    dangers: 'May neglect other responsibilities or struggle with conflict resolution.',
    image: '/assets/friendships.png',
    group: 'benevolence',
  },
  {
    name: 'Ingenuity',
    synonyms: ['Resourcefulness', 'Inventiveness'],
    info: 'Enjoys solving problems in creative ways and finding unconventional solutions.',
    strengths: 'Overcomes obstacles, adapts quickly, and inspires innovation.',
    dangers: 'May overlook established methods or take unnecessary risks.',
    image: '/assets/ingenuity.png',
    group: 'self-direction',
  },
  {
    name: 'Money',
    synonyms: ['Wealth', 'Income'],
    info: 'Values financial security, accumulation of assets, and economic independence.',
    strengths: 'Provides stability, enables opportunities, and supports long-term planning.',
    dangers: 'May become overly focused on material possessions or status.',
    image: '/assets/money.png',
    group: 'achievement',
  },
  {
    name: 'Camaraderie',
    synonyms: ['Fellowship', 'Team spirit'],
    info: 'Enjoys a sense of togetherness and mutual trust within a group. Values shared experiences and collective support.',
    strengths: 'Builds strong teams, increases morale, and fosters loyalty.',
    dangers: 'May avoid necessary confrontation or struggle with individual recognition.',
    image: '/assets/camaraderie.png',
    group: 'benevolence',
  },
  {
    name: 'Unconstrained',
    synonyms: ['Unrestricted', 'Free-spirited'],
    info: 'Prefers to live without limitations or rigid boundaries. Enjoys freedom in thought and action.',
    strengths: 'Adapts easily, embraces change, and encourages innovation.',
    dangers: 'May resist necessary structure or commitments.',
    image: '/assets/unconstrained.png',
    group: 'self-direction',
  },
  {
    name: 'Guide',
    synonyms: ['Mentor', 'Advisor'],
    info: 'Enjoys helping others find direction and make decisions. Values sharing knowledge and experience.',
    strengths: 'Provides support, wisdom, and encouragement to others.',
    dangers: 'May become overbearing or struggle to let others make their own mistakes.',
    image: '/assets/guide.png',
    group: 'benevolence',
  },
  {
    name: 'Love',
    synonyms: ['Affection', 'Devotion'],
    info: 'Values deep emotional connection and caring for others. Seeks to give and receive love in relationships.',
    strengths: 'Builds strong bonds, provides emotional security, and inspires kindness.',
    dangers: 'May become dependent or struggle with loss and rejection.',
    image: '/assets/love.png',
    group: 'benevolence',
  },
  {
    name: 'Risk',
    synonyms: ['Daring', 'Adventurous'],
    info: 'Willing to take chances and embrace uncertainty. Sees risk as an opportunity for growth.',
    strengths: 'Drives innovation, overcomes fear, and achieves breakthroughs.',
    dangers: 'May take unnecessary risks or ignore potential consequences.',
    image: '/assets/risk.png',
    group: 'stimulation',
  },
  {
    name: 'Govern',
    synonyms: ['Lead', 'Direct'],
    info: 'Values having influence and responsibility over others or processes. Enjoys organizing and making decisions.',
    strengths: 'Provides direction, ensures order, and motivates others.',
    dangers: 'May become controlling or struggle with delegation.',
    image: '/assets/govern.png',
    group: 'power',
  },
  {
    name: 'Responsibility',
    synonyms: ['Accountability', 'Duty'],
    info: 'Takes ownership of actions and obligations. Values reliability and fulfilling commitments.',
    strengths: 'Builds trust, ensures follow-through, and supports group success.',
    dangers: 'May become overburdened or struggle to say no.',
    image: '/assets/responsibility.png',
    group: 'security',
  },
  {
    name: 'Adventure',
    synonyms: ['Exploration', 'Excitement'],
    info: 'Seeks new experiences and enjoys exploring the unknown. Thrives on novelty and challenge.',
    strengths: 'Encourages growth, adaptability, and resilience.',
    dangers: 'May become restless or take unnecessary risks.',
    image: '/assets/adventure.png',
    group: 'stimulation',
  },
  {
    name: 'Influence',
    synonyms: ['Impact', 'Persuasion'],
    info: 'Enjoys shaping opinions, decisions, or outcomes. Values the ability to make a difference.',
    strengths: 'Motivates others, drives change, and achieves goals.',
    dangers: 'May manipulate or overlook others’ needs.',
    image: '/assets/influence.png',
    group: 'achievement',
  },
  {
    name: 'Tolerant',
    synonyms: ['Open-minded', 'Accepting'],
    info: 'Respects and accepts differences in others. Values diversity and inclusivity.',
    strengths: 'Builds harmony, reduces conflict, and encourages learning.',
    dangers: 'May avoid necessary confrontation or struggle with setting boundaries.',
    image: '/assets/tolerant.png',
    group: 'universalism',
  },
  {
    name: 'Experiment',
    synonyms: ['Trial', 'Testing'],
    info: 'Enjoys trying new things and learning from results. Sees failure as a learning opportunity.',
    strengths: 'Drives innovation, adapts quickly, and finds creative solutions.',
    dangers: 'May lack consistency or struggle with long-term focus.',
    image: '/assets/experiment.png',
    group: 'self-direction',
  },
  {
    name: 'Participation',
    synonyms: ['Involvement', 'Engagement'],
    info: 'Values being actively involved in activities and decisions. Enjoys contributing to group efforts.',
    strengths: 'Builds community, increases motivation, and ensures diverse perspectives.',
    dangers: 'May overcommit or struggle with prioritization.',
    image: '/assets/participation.png',
    group: 'benevolence',
  },
  {
    name: 'Caring',
    synonyms: ['Nurturing', 'Supportive'],
    info: 'Enjoys helping others and providing emotional or practical support. Values compassion and kindness.',
    strengths: 'Builds trust, strengthens relationships, and creates a positive environment.',
    dangers: 'May neglect own needs or become emotionally exhausted.',
    image: '/assets/caring.png',
    group: 'benevolence',
  },
  {
    name: 'Dynamic',
    synonyms: ['Energetic', 'Vigorous'],
    info: 'Thrives in fast-paced environments and enjoys constant change. Brings energy and movement to projects.',
    strengths: 'Drives progress, adapts quickly, and inspires others.',
    dangers: 'May become restless or struggle with routine.',
    image: '/assets/dynamic.png',
    group: 'stimulation',
  },
  {
    name: 'Learning',
    synonyms: ['Growth', 'Development'],
    info: 'Values acquiring new knowledge and skills. Enjoys challenges that promote personal or professional growth.',
    strengths: 'Adapts to change, solves problems, and stays relevant.',
    dangers: 'May become unfocused or dissatisfied with routine.',
    image: '/assets/learning.png',
    group: 'self-direction',
  },
  {
    name: 'Helping',
    synonyms: ['Assisting', 'Supporting'],
    info: 'Finds fulfillment in making a positive difference for others. Enjoys volunteering and acts of service.',
    strengths: 'Builds community, increases well-being, and fosters gratitude.',
    dangers: 'May neglect self-care or become overextended.',
    image: '/assets/helping.png',
    group: 'benevolence',
  },
  {
    name: 'Competitive',
    synonyms: ['Ambitious', 'Driven'],
    info: 'Enjoys striving to be the best and measuring success against others. Motivated by winning and achievement.',
    strengths: 'Drives high performance, sets ambitious goals, and inspires others.',
    dangers: 'May become overly aggressive or struggle with collaboration.',
    image: '/assets/competitive.png',
    group: 'achievement',
  },
  {
    name: 'Intellectually Challenging',
    synonyms: ['Stimulating', 'Thought-provoking'],
    info: 'Seeks out complex problems and enjoys deep thinking. Values opportunities to stretch the mind and engage in rigorous analysis.',
    strengths: 'Solves difficult problems, encourages innovation, and promotes learning and intellectual growth.',
    dangers: 'May become impatient with routine or struggle to communicate ideas simply.',
    image: '/assets/intellectually_challenging.png',
    group: 'self-direction',
  },
  {
    name: 'Nurturing',
    synonyms: ['Caring', 'Supportive'],
    info: 'Enjoys fostering growth and development in others. Values encouragement and positive reinforcement.',
    strengths: 'Builds confidence, strengthens relationships, and creates a supportive environment.',
    dangers: 'May become overprotective or struggle with letting go.',
    image: '/assets/nurturing.png',
    group: 'benevolence',
  },
  {
    name: 'Empathise',
    synonyms: ['Understand', 'Relate'],
    info: 'Values the ability to understand and share the feelings of others. Seeks to connect on an emotional level.',
    strengths: 'Builds trust, resolves conflict, and supports well-being.',
    dangers: 'May become emotionally overwhelmed or struggle with boundaries.',
    image: '/assets/empathise.png',
    group: 'benevolence',
  },
  {
    name: 'Proficiency',
    synonyms: ['Skillfulness', 'Expertise'],
    info: 'Values having a high level of skill, knowledge, and competence in a particular area or task.',
    strengths: 'Delivers high-quality work, solves problems effectively, and mentors others.',
    dangers: 'May become complacent or resistant to change.',
    image: '/assets/proficiency.png',
    group: 'achievement',
  },
  {
    name: 'Settled',
    synonyms: ['Established', 'Rooted'],
    info: 'Values stability, consistency, and a sense of belonging. Prefers familiar routines and environments.',
    strengths: 'Provides reliability, builds trust, and fosters a sense of security.',
    dangers: 'May resist necessary change or become stagnant.',
    image: '/assets/settled.png',
    group: 'security',
  },
  {
    name: 'Superiority',
    synonyms: ['Dominance', 'Preeminence'],
    info: 'Values being better, more skilled, or more knowledgeable than others. Seeks to excel and be recognized as superior.',
    strengths: 'Drives high performance, encourages excellence, and inspires others.',
    dangers: 'May become arrogant, dismissive, or overly competitive.',
    image: '/assets/superiority.png',
    group: 'achievement',
  },
  {
    name: 'Predictable',
    synonyms: ['Reliable', 'Consistent'],
    info: 'Values consistency, reliability, and predictability in actions, decisions, and outcomes.',
    strengths: 'Builds trust, reduces anxiety, and ensures stability.',
    dangers: 'May become boring, resist change, or struggle in dynamic environments.',
    image: '/assets/predictable.png',
    group: 'security',
  },
  {
    name: 'People Oriented',
    synonyms: ['Interpersonal', 'Sociable'],
    info: 'Values interacting, communicating, and building relationships with others. Enjoys being part of a team or community.',
    strengths: 'Builds strong networks, fosters collaboration, and increases overall effectiveness.',
    dangers: 'May neglect tasks or responsibilities in favor of socializing.',
    image: '/assets/people_oriented.png',
    group: 'benevolence',
  },
  {
    name: 'Competence',
    synonyms: ['Capability', 'Proficiency'],
    info: 'Values having the ability, skill, and knowledge to perform tasks effectively and efficiently.',
    strengths: 'Delivers high-quality work, solves problems effectively, and builds confidence.',
    dangers: 'May become complacent or resistant to feedback and improvement.',
    image: '/assets/competence.png',
    group: 'achievement',
  },
  {
    name: 'Safe',
    synonyms: ['Secure', 'Protected'],
    info: 'Values physical and emotional safety. Seeks to create and maintain a safe environment for self and others.',
    strengths: 'Builds trust, reduces anxiety, and ensures well-being.',
    dangers: 'May avoid necessary risks or become overly cautious.',
    image: '/assets/safe.png',
    group: 'security',
  },
  {
    name: 'Open',
    synonyms: ['Receptive', 'Accessible'],
    info: 'Values openness to new ideas, feedback, and different perspectives. Seeks to be approachable and inclusive.',
    strengths: 'Encourages collaboration, drives innovation, and builds strong relationships.',
    dangers: 'May become overwhelmed by too many inputs or struggle with decision-making.',
    image: '/assets/open.png',
    group: 'universalism',
  },
  {
    name: 'Secure Orderly',
    synonyms: ['Neat', 'Systematic'],
    info: 'Values having a secure, orderly, and well-organized environment. Seeks to create systems that provide stability and predictability.',
    strengths: 'Reduces anxiety, increases efficiency, and ensures reliability.',
    dangers: 'May become overly controlling or struggle with flexibility.',
    image: '/assets/secure_orderly.png',
    group: 'security',
  },
  {
    name: 'Organisation',
    synonyms: ['Management', 'Coordination'],
    info: 'Values effective organization, management, and coordination of resources, tasks, and people. Seeks to create order and efficiency.',
    strengths: 'Increases productivity, reduces confusion, and ensures consistency.',
    dangers: 'May become rigid, resist change, or struggle in unstructured environments.',
    image: '/assets/organisation.png',
    group: 'conformity',
  },
];
