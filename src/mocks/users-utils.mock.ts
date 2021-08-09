import { CoachTest } from '../app/interfaces/coach-edit';

export interface TestData {
  id: string;
  level: string;
  isChecked: boolean;
  isHigh: boolean;
  date: Date;
}

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
}

export interface CoachEditorTest {
  id: string;
  level: string;
}

export interface DialogData {
  id: number;
  level: string;
}

const MOCK_LEVELS: string[] = [
  'Elementary',
  'Pre-Intermediate',
  'Intermediate',
  'Upper-Intermediate',
  'Advanced',
];

export function getRandomDate(from: Date, to: Date) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

const generateRandomDate = (): Date => {
  return getRandomDate(new Date('2020-10-12'), new Date('2021-07-12'));
};

export function createNewCoachProfileTest(id: number): CoachTest {
  return {
    id: id.toString(),
    level: MOCK_LEVELS[Math.round(Math.random() * (MOCK_LEVELS.length - 1))],
    date: generateRandomDate().toString(),
    isChecked: id % 2 === 1,
    isHigh: id % 2 !== 1 && id % 10 === 0,
  };
}

export function createNewAuditionQuestionTest(id: number) {
  return {
    id: id.toString(),
    level: 5,
    creationDate: '2021-08-04T05:37:12.2158831-07:00',
    creatorId: '2cfaa429-e45c-415c-27cf-08d9574493b2',
    nameQuestion: `Audition ${id}`,
    questionNumber: 284,
  };
}

export function createNewWritingAndSpeakingQuestionTest(id: number) {
  return {
    id: id.toString(),
    level: 4,
    creationDate: '2021-08-04T05:37:12.2158831-07:00',
    creatorId: '2cfaa429-e45c-415c-27cf-08d9574493b2',
    nameQuestion: `WritingAndSpeaking ${id}`,
    questionNumber: 284,
  };
}

export const MOCK_TESTS = Array.from({ length: 100 }, (_, k) => createNewCoachProfileTest(k + 1));
export const MOCK_AUDITION_QUESTIONS = Array.from({ length: 80 }, (_, k) =>
  createNewAuditionQuestionTest(k + 1),
);
export const MOCK_WRITING_AND_SPEAKING_QUESTIONS = Array.from({ length: 100 }, (_, k) =>
  createNewWritingAndSpeakingQuestionTest(k + 1),
);
