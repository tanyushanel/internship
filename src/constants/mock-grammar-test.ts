import { Level } from './data-constants';

export interface Question {
  id: number;
  text: string;
  level: Level;
  auditionId: number;
  answerId: number;
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  questionId: Question['id'];
  isRight: boolean;
}

const QUESTION = [
  'lorem',
  'ipsum',
  'dolor sit',
  'amet',
  '____',
  'adipisicing',
  'elit',
  'Iusto',
  'adipisci',
  'dolores vero',
  'odio',
  'consequuntur',
  'numquam',
  'accusantium',
  'soluta',
  'repellat cum',
  'quod eligendi',
  'neque eum ____',
  'deserunt',
  'test',
];

const ANSWER = [
  'esse est',
  'Nostrum',
  'voluptas soluta',
  'non placeat',
  'dicta minima',
  'dolore explicabo cum',
  'iste',
  'consequatur',
  'harum',
  'Quasi saepe neque',
  'tenetur amet',
  'ratione',
  'eligendi quos',
  'successfully',
  'Red',
];

export function createNewAnswerPack(id: number): Answer {
  return {
    id,
    text: ANSWER[Math.floor(Math.random() * ANSWER.length)],
    questionId: 1,
    isRight: true,
  };
}

export function createNewTestQuestion(id: number): Question {
  const MOCK_ANSWER_LIST = Array.from({ length: 4 }, (_, k) => createNewAnswerPack(k + 1));

  let group: any[] = [];

  for (let i = 0; i <= 5; i += 1) {
    group = [...group, QUESTION[Math.floor(Math.random() * QUESTION.length)]];
  }

  const sentense = group.join(' ');

  return {
    id,
    text: sentense.charAt(0).toUpperCase() + sentense.slice(1),
    level: [...Object.values(Level)][Math.floor(Math.random() * 5)],
    auditionId: id,
    answerId: id,
    answers: [...MOCK_ANSWER_LIST],
  };
}

export const MOCK_QUESTION_LIST = Array.from({ length: 12 }, (_, k) =>
  createNewTestQuestion(k + 1),
);
