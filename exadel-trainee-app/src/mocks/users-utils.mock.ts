export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
}

export interface TestData {
  id: string;
  level: string;
  isChecked: boolean;
  isHigh: boolean;
}

const MOCK_LASTNAMES: string[] = [
  'Walker',
  'Lee',
  'Young',
  'Johnson',
  'Parker',
  'Jones',
  'Davis',
  'Rodriguez',
];
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

const MOCK_LEVELS: string[] = [
  'Starter',
  'Elementary',
  'Pre-intermediate',
  'Intermediate',
  'Upper-intermediate',
  'Advanced',
];

export function createNewUser(id: number): UserData {
  const name = `${MOCK_FIRSTNAMES[Math.round(Math.random() * (MOCK_FIRSTNAMES.length - 1))]}`;

  return {
    id: id.toString(),
    firstName: name,
    lastName: MOCK_LASTNAMES[Math.round(Math.random() * (MOCK_LASTNAMES.length - 1))],
  };
}

export function createNewCoachProfileTest(id: number): TestData {
  return {
    id: id.toString(),
    level: MOCK_LEVELS[Math.round(Math.random() * (MOCK_LEVELS.length - 1))],
    isChecked: true,
    isHigh: true,
  };
}

export const MOCK_USERS = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
export const MOCK_TESTS = Array.from({ length: 100 }, (_, k) => createNewCoachProfileTest(k + 1));
