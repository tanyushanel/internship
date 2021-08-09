import { Audition } from './audition';
import { Level } from '../constants/data-constants';
import { TopicModule } from './essay-speaking';
import { Question, AnswerQuestion } from './question-answer';

export interface TestResult {
  id: string;
  level: Level;
  testNumber: string;
  creationDate: string;
  testPassingDate: string;
  assignmentEndDate: string;
  grammarMark: number | null;
  auditionMark: number | null;
  essayMark: number | null;
  speakingMark: number | null;
  comment: string | null;
  userId: string | null;
  hrId: string | null;
  coachId: string | null;
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
  id: string;
  userId: number;
  level: Level;
  testPassingDate: string;
  grammarQuestions: Question[];
  audition: Audition;
  essay: TopicModule;
  speaking: TopicModule;
}

export interface TestSubmit {
  id: string;
  grammarAnswers: AnswerQuestion[];
  auditionAnswers: AnswerQuestion[];
  essayAnswer: string;
  speakingAnswerReference: string;
}
