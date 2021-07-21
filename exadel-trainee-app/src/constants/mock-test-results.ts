import { TestResult } from 'src/app/interfaces/result';
import { Level } from 'src/constants/data-constants';

const feedback: string[] = ['Well done', 'According to the level', '', 'Ok', 'Normally'];

export function getRandomDate(from: Date, to: Date) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

const generateRandomDate = (): Date => {
  return getRandomDate(new Date('2020-10-12'), new Date('2021-07-12'));
};

export function generateRandomMark() {
  return Math.floor(10 + Math.random() * (25 + 1 - 10));
}

export function createNewTestResult(id: number): TestResult {
  return {
    id,
    date: { creationDate: generateRandomDate().toDateString() },
    level: [...Object.values(Level)][Math.floor(Math.random() * 5)],
    userId: 1,
    testId: 1,
    content: {
      grammar: {
        id,
        mark: generateRandomMark(),
      },
      audition: {
        id,
        mark: generateRandomMark(),
      },
      essay: {
        id,
        mark: generateRandomMark(),
      },
      speaking: {
        id,
        mark: generateRandomMark(),
      },
    },
    feedback: feedback[Math.floor(Math.random() * 5)],
  };
}

export const MOCK_TEST_RESULTS = Array.from({ length: 100 }, (_, k) => createNewTestResult(k + 1));
