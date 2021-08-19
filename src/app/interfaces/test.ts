import { Subscription } from 'rxjs';
import { SignatureHelpTriggerReason } from 'typescript';
import { Level } from '../constants/data-constants';
import { Audition } from './audition';
import { TopicModule } from './essay-speaking';
import { Question } from './question-answer';

export interface TestResult {
  id: string;
  level: Level;
  testNumber: string;
  creationDate: string;
  testPassingDate: string;
  assignmentEndDate: string;
  grammarMark: number;
  auditionMark: number;
  essayMark: number;
  speakingMark: number;
  comment: string;
  userId: string;
  hrId: string;
  coachId: string;
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
  auditionQuestions: Question[];
  audition: Audition;
  essay: TopicModule;
  speaking: TopicModule;
}

export interface TestSubmit {
  id: string;
  grammarAnswers: string[];
  auditionAnswers: string[];
  essayAnswer: string;
  speakingAnswerReference: string;
}

export interface FinishTestBody extends TestSubmit {
  speakingAnswerReference: string;
  isFinished?: boolean;
  timerSubscription: Subscription;
}

export interface SubmitTestResponse {
  id: string;
  auditionMark: number;
  grammarMark: number;
  level: Level;
  testPassingDate: string;
  userId: string;
}
