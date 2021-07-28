export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
}

export interface TestData {
  id: string;
  level: string;
  isChecked: boolean;
  isHigh: boolean;
  date: Date;
}

export interface CoachEditorTest {
  id: string;
  level: string;
}

export interface DialogData {
  id: number;
  level: string;
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
  'Pre-Intermediate',
  'Intermediate',
  'Upper-Intermediate',
  'Advanced',
];

export function createNewUser(id: number): UserData {
  const name = `${MOCK_FIRSTNAMES[Math.round(Math.random() * (MOCK_FIRSTNAMES.length - 1))]}`;

  return {
    id,
    firstName: name,
    lastName: MOCK_LASTNAMES[Math.round(Math.random() * (MOCK_LASTNAMES.length - 1))],
  };
}

export function getRandomDate(from: Date, to: Date) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

const generateRandomDate = (): Date => {
  return getRandomDate(new Date('2020-10-12'), new Date('2021-07-12'));
};

export function createNewCoachProfileTest(id: number): TestData {
  return {
    id: id.toString(),
    level: MOCK_LEVELS[Math.round(Math.random() * (MOCK_LEVELS.length - 1))],
    date: generateRandomDate(),
    isChecked: id % 2 === 1,
    isHigh: id % 2 !== 1 && id % 10 === 0,
  };
}

export function createNewGrammarQuestionTest(id: number): CoachEditorTest {
  return {
    id: id.toString(),
    level: MOCK_LEVELS[Math.round(Math.random() * (MOCK_LEVELS.length - 1))],
  };
}

export function createNewAuditionQuestionTest(id: number): CoachEditorTest {
  return {
    id: id.toString(),
    level: MOCK_LEVELS[Math.round(Math.random() * (MOCK_LEVELS.length - 1))],
  };
}

export function createNewWritingAndSpeakingQuestionTest(id: number): CoachEditorTest {
  return {
    id: id.toString(),
    level: MOCK_LEVELS[Math.round(Math.random() * (MOCK_LEVELS.length - 1))],
  };
}

export const MOCK_USERS = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
export const MOCK_TESTS = Array.from({ length: 100 }, (_, k) => createNewCoachProfileTest(k + 1));
export const MOCK_GRAMMAR_QUESTIONS = Array.from({ length: 60 }, (_, k) =>
  createNewGrammarQuestionTest(k + 1),
);
export const MOCK_AUDITION_QUESTIONS = Array.from({ length: 80 }, (_, k) =>
  createNewAuditionQuestionTest(k + 1),
);
export const MOCK_WRITING_AND_SPEAKING_QUESTIONS = Array.from({ length: 100 }, (_, k) =>
  createNewWritingAndSpeakingQuestionTest(k + 1),
);
