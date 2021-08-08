export interface CoachData {
  name: string | null;
  email: string | null;
}

export interface TestData {
  isHighPriority: boolean;
  position: number;
  date: number;
  level: string;
  coach: CoachData;
  isAssign: boolean;
}

const MOCK_EMPTY_COACH: CoachData = {
  name: null,
  email: null,
};

export enum AdminTestTabs {
  notAssigned = 'Not Assigned',
  assigned = 'Assign',
}

export const MOCK_COACH: CoachData[] = [
  {
    name: 'Elizabeth',
    email: 'Elizabeth@email.net',
  },
  {
    name: 'Thomas',
    email: 'Thomas@email.net',
  },
  {
    name: 'Mia',
    email: 'Mia@email.net',
  },
  {
    name: 'Arthur',
    email: 'Arthur@email.net',
  },
  {
    name: 'Violet',
    email: 'Violet@email.net',
  },
  {
    name: 'Levi',
    email: 'Levi@email.net',
  },
  {
    name: 'Atticus',
    email: 'Atticus@email.net',
  },
];

export function createNewTest(position: number): TestData {
  const coachData = MOCK_COACH[Math.round(Math.random() * (MOCK_COACH.length - 1))];
  const isTestAssigned = !!Math.round(Math.random());
  return {
    position,
    date: Date.now(),
    isAssign: isTestAssigned,
    isHighPriority: isTestAssigned,
    level: ['beginner', 'intermediate', 'advanced'][Math.floor(Math.random() * 3)],
    coach: isTestAssigned ? coachData : MOCK_EMPTY_COACH,
  };
}
export const MOCK_TEST = Array.from({ length: 100 }, (_, k) => createNewTest(k + 1));
