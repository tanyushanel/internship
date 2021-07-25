export interface CoachData {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface TestData {
  position: number;
  date: number;
  level: string;
  coach: CoachData;
  grammarGrade: string;
  isAssign: boolean;
}

const MOCK_FIRSTNAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const MOCK_COACH: CoachData[] = [
  {
    name: 'Elizabeth',
    email: 'Elizabeth@email.net',
    phoneNumber: '1234567',
  },
  {
    name: 'Thomas',
    email: 'Thomas@email.net',
    phoneNumber: '1234567',
  },
  {
    name: 'Mia',
    email: 'Mia@email.net',
    phoneNumber: '1234567',
  },
  {
    name: 'Arthur',
    email: 'Arthur@email.net',
    phoneNumber: '1234567',
  },
  {
    name: 'Violet',
    email: 'Violet@email.net',
    phoneNumber: '1234567',
  },
  {
    name: 'Levi',
    email: 'Levi@email.net',
    phoneNumber: '1234567',
  },
  {
    name: 'Atticus',
    email: 'Atticus@email.net',
    phoneNumber: '1234567',
  },
];

export function createNewTest(position: number): TestData {
  const coachData = MOCK_COACH[Math.round(Math.random() * (MOCK_COACH.length - 1))];
  return {
    position,
    date: Date.now(),
    isAssign: !!Math.round(Math.random()),
    level: ['beginner', 'intermediate', 'advanced'][Math.floor(Math.random() * 3)],
    coach: coachData,
    grammarGrade: Math.floor(Math.random() * 100).toString(),
  };
}

export const MOCK_TEST = Array.from({ length: 100 }, (_, k) => createNewTest(k + 1));
