/* eslint-disable prettier/prettier */
import { User } from '../app/interfaces/user';
import { Level, Priority } from './data-constants';

export interface FullTestToPass {
  id: number;
  auditionId: TestModule['id'];
  essayId: TestModule['id'];
  speakingId: TestModule['id'];
  testQuestions: Question[];
}

export interface TestModule {
  id: number;
  mark?: number;
  responseRef?: string;
  textContent?: string;
}

export interface Question {
  id: number;
  text: string;
  auditionId: number;
  answerId: number;
}

export interface Answer {
  Id: number;
  text: string;
  questionId: Question['id'];
  isRight: boolean;
}

export interface Test {
  id: number;
  level: Level;
  userId: User['id'];
  hrId?: User['id'];
  coachId?: User['id'];
  priority?: Priority;
  date: {
    creationDate?: string;
    assignmentStartDate?: string;
    assignmentEndDate?: string;
  };
  content: {
    grammar: TestModule['id'];
    audition: TestModule['id'];
    essay: TestModule['id'];
    speaking: TestModule;
  };
  feedback?: string;
}
