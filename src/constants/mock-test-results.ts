// import { Test } from 'src/app/interfaces/test';
// import { Level } from 'src/constants/data-constants';
// import { Priority } from './data-constants';

// const feedback: string[] = ['Well done', 'According to the level', '', 'Ok', 'Normally'];

// export function getRandomDate(from: Date, to: Date) {
//   const fromTime = from.getTime();
//   const toTime = to.getTime();
//   return new Date(fromTime + Math.random() * (toTime - fromTime));
// }

// const generateRandomDate = (): Date => {
//   return getRandomDate(new Date('2020-10-12'), new Date('2021-07-12'));
// };

// export function generateRandomMark() {
//   const from = 10;
//   const to = 25;
//   return Math.floor(from + Math.random() * (to + 1 - from));
// }

// export function createNewTestResult(id: number): Test {
//   return {
//     id,
//     date: { creationDate: generateRandomDate().toDateString() },
//     level: [...Object.values(Level)][Math.floor(Math.random() * 5)],
//     userId: 1,
//     // priority: [...Object.values(Priority)][Math.floor(Math.random() * 2)],
//     priority: false,
//     content: {
//       grammar: {
//         id,
//         mark: generateRandomMark(),
//       },
//       audition: {
//         id,
//         mark: generateRandomMark(),
//       },
//       essay: {
//         id,
//         mark: generateRandomMark(),
//       },
//       speaking: {
//         id,
//         mark: generateRandomMark(),
//       },
//     },
//     feedback: feedback[Math.floor(Math.random() * 5)],
//   };
// }

// export const MOCK_TEST_RESULTS = Array.from({ length: 100 }, (_, k) => createNewTestResult(k + 1));
