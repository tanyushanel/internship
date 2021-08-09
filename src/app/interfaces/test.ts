import { Audition } from './audition';
import { Level } from '../constants/data-constants';
import { TopicModule } from './essay-speaking';

import { Question } from './question-answer';

export interface TestResult {
  id: number;
  level: Level;
  testNumber: number;
  creationDate: string;
  testPassingDate: string;
  assignmentEndDate: string;
  grammarMark: number | null;
  auditionMark: number | null;
  essayMark: number | null;
  speakingMark: number | null;
  comment: number | null;
  userId: number | null;
  hrId: number | null;
  coachId: number | null;
  priority: boolean;
}

export interface UserTable {
  id: string;
  firstName: string;
  lastName: string;
  creationDate: string;
  avatar: string;
  email: string;
}
export interface UsersList {
  currentPage: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  pageCount: number;
  pageSize: number;
  results: UserTable[];
  rowCount: number;
}

export interface TestContent {
  id: number;
  userId: number;
  level: Level;
  testPassingDate: string;
  grammarQuestions: Question[];
  audition: Audition;
  essay: TopicModule;
  speaking: TopicModule;
}
