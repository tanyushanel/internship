// eslint-disable-next-line import/no-cycle
import { EmptyQuestion } from '../interfaces/question-answer';

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

export enum FilterFields {
  id = 'id',
  level = 'level',
  date = 'date',
}

export const emptyQuestion: EmptyQuestion = {
  level: 1,
  nameQuestion: '',
  answers: [
    {
      nameAnswer: '',
      isRight: false,
    },
    {
      nameAnswer: '',
      isRight: false,
    },
    {
      nameAnswer: '',
      isRight: false,
    },
    {
      nameAnswer: '',
      isRight: false,
    },
  ],
};
