export interface QuizOption {
  label: string;
  value: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'radio' | 'dropdown';
  options: QuizOption[];
}

export interface ResultTier {
  key: 'strong' | 'building' | 'fresh';
  title: string;
  badge: string;
  creditRange: string;
  color: 'emerald' | 'gold' | 'navy';
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  timeline: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'goal',
    question: 'What\'s your homeownership goal?',
    type: 'radio',
    options: [
      { label: 'Buy my first home', value: 'first-home' },
      { label: 'Stop renting and start owning', value: 'stop-renting' },
      { label: 'Rent-to-own a home', value: 'rent-to-own' },
      { label: 'Just exploring my options', value: 'exploring' },
    ],
  },
  {
    id: 'timeline',
    question: 'When do you want to be in a home?',
    type: 'radio',
    options: [
      { label: 'Within 3 months', value: '3mo' },
      { label: '3–6 months', value: '3-6mo' },
      { label: '6–12 months', value: '6-12mo' },
      { label: '12+ months from now', value: '12mo+' },
    ],
  },
  {
    id: 'credit',
    question: 'What\'s your approximate credit score?',
    type: 'radio',
    options: [
      { label: '720 or higher', value: '720+' },
      { label: '680–719', value: '680-719' },
      { label: '620–679', value: '620-679' },
      { label: '580–619', value: '580-619' },
      { label: 'Below 580', value: 'below-580' },
      { label: 'I\'m not sure', value: 'not-sure' },
    ],
  },
  {
    id: 'income',
    question: 'What\'s your household income?',
    type: 'radio',
    options: [
      { label: 'Under $40,000', value: 'under-40k' },
      { label: '$40,000–$60,000', value: '40-60k' },
      { label: '$60,000–$80,000', value: '60-80k' },
      { label: '$80,000–$120,000', value: '80-120k' },
      { label: '$120,000+', value: '120k+' },
    ],
  },
  {
    id: 'savings',
    question: 'How much do you have saved for a down payment?',
    type: 'radio',
    options: [
      { label: 'Nothing yet', value: 'nothing' },
      { label: 'Under $5,000', value: 'under-5k' },
      { label: '$5,000–$15,000', value: '5-15k' },
      { label: '$15,000–$30,000', value: '15-30k' },
      { label: '$30,000+', value: '30k+' },
    ],
  },
  {
    id: 'county',
    question: 'Which Maryland county do you live in?',
    type: 'dropdown',
    options: [], // populated from counties.ts at runtime
  },
  {
    id: 'situation',
    question: 'Which best describes your current situation?',
    type: 'radio',
    options: [
      { label: 'Renting an apartment or house', value: 'renting' },
      { label: 'Living with family or friends', value: 'family' },
      { label: 'Facing or recovering from foreclosure', value: 'foreclosure' },
      { label: 'Just exploring my options', value: 'exploring' },
    ],
  },
];

export const resultTiers: Record<string, ResultTier> = {
  strong: {
    key: 'strong',
    title: 'Strong Position',
    badge: '680+',
    creditRange: '680+',
    color: 'emerald',
    description:
      'You\'re in a great position. With your credit profile, you qualify for conventional loans, full Maryland Mortgage Program access, and the best available rates. Many buyers in your tier close within 60 days.',
    features: [
      'Conventional loan eligible',
      'Full MMP program access',
      'Best available interest rates',
      'Up to $6,000 in DPA grants',
      'Fast-track 60-day closing',
    ],
    cta: 'Schedule Your Free Consultation',
    ctaHref: '/contact',
    timeline: 'Estimated timeline: 30–60 days to closing',
  },
  building: {
    key: 'building',
    title: 'Building Momentum',
    badge: '580–679',
    creditRange: '580–679',
    color: 'gold',
    description:
      'You\'re closer than you think. With FHA loan access, targeted down payment assistance, and a short credit optimization period, you can unlock major savings and be in a home within months.',
    features: [
      'FHA loan eligible',
      'Down payment assistance programs',
      'Credit coaching included',
      'Statewide grant access',
      'Personalized action plan',
    ],
    cta: 'Schedule Your Free Consultation',
    ctaHref: '/contact',
    timeline: 'Estimated timeline: 3–6 months to closing',
  },
  fresh: {
    key: 'fresh',
    title: 'Fresh Start',
    badge: 'Below 580',
    creditRange: 'Below 580',
    color: 'navy',
    description:
      'Every homeowner started somewhere. We\'ll build a clear roadmap — credit repair, rent-to-own bridges, and step-by-step guidance — to get you mortgage-ready within 6–12 months.',
    features: [
      'Credit repair pathway',
      'Rent-to-own bridge option',
      'Step-by-step action plan',
      'Monthly progress check-ins',
      'No upfront costs to start',
    ],
    cta: 'Schedule Your Free Consultation',
    ctaHref: '/contact',
    timeline: 'Estimated timeline: 6–12 months to mortgage-ready',
  },
};

export function getTierFromCredit(creditValue: string): ResultTier {
  switch (creditValue) {
    case '720+':
    case '680-719':
      return resultTiers.strong;
    case '620-679':
    case '580-619':
      return resultTiers.building;
    case 'below-580':
    case 'not-sure':
    default:
      return resultTiers.fresh;
  }
}
