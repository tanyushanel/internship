export interface TestData {
  position: number;
  date: number;
  level: string;
  coach: string;
  expl: string;
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
  'Not assign',
  'Not assign',
  'Not assign',
  'Not assign',
  'Not assign',
  'Not assign',
  'Not assign',
  'Not assign',
];

export function createNewTest(position: number): TestData {
  const name = `${MOCK_FIRSTNAMES[Math.round(Math.random() * (MOCK_FIRSTNAMES.length - 1))]}`;

  return {
    position,
    date: Date.now(),
    level: ['beginner', 'intermediate', 'advanced'][Math.floor(Math.random() * 3)],
    coach: name,
    expl: Math.floor(Math.random() * 100).toString(),
  };
}

export const MOCK_TEST = Array.from({ length: 100 }, (_, k) => createNewTest(k + 1));
