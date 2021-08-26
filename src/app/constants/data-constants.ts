import { EmptyQuestion } from '../interfaces/question-answer';
// eslint-disable-next-line import/no-cycle
import { CoachEmptyTopic } from '../interfaces/coach-edit';
// eslint-disable-next-line import/no-cycle
import { UpdateCoachListening } from '../interfaces/audition';

export enum Level {
  Elementary = 'Elementary',
  PreIntermediate = 'Pre-intermediate',
  Intermediate = 'Intermediate',
  UpperIntermediate = 'Upper-intermediate',
  Advanced = 'Advanced',
}

export const languageLevel: { [key: string]: Level } = {
  1: Level.Elementary,
  2: Level.PreIntermediate,
  3: Level.Intermediate,
  4: Level.UpperIntermediate,
  5: Level.Advanced,
};
export enum CoachTestTabs {
  unchecked = 'In Review',
  highPriority = 'High Priority',
  checked = 'Reviewed',
}

export enum ReportStatus {
  reject = 2,
  solve = 3,
}

export enum UserRole {
  User = 'User',
  HumanResourceManager = 'HumanResourceManager',
  Coach = 'Coach',
  Administrator = 'Administrator',
}

export enum CoachEditorTabs {
  grammar = 'Grammar',
  audition = 'Listening',
  writingAndSpeaking = 'Writing & Speaking',
}

export enum GrammarAnswers {
  first = 'A)',
  second = 'B)',
  third = 'C)',
  fourth = 'D)',
}

const emptyAnswersListening = () => {
  return Array.from({ length: 4 }, () => ({
    nameAnswer: '',
    isRight: false,
  }));
};

export const emptyQuestion: EmptyQuestion = {
  level: 1,
  nameQuestion: '',
  answers: emptyAnswersListening(),
};

export const emptyTopic: CoachEmptyTopic = {
  level: 1,
  topicName: '',
};

export const emptyQuestionsListening = () => {
  return Array.from({ length: 10 }, () => ({
    id: '',
    nameQuestion: '',
    level: 1,
    answers: emptyAnswersListening(),
  }));
};

export const emptyListening: UpdateCoachListening = {
  id: '',
  audioFilePath: '',
  level: 3,
  questions: emptyQuestionsListening(),
};
