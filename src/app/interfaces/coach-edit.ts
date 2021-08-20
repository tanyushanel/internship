// eslint-disable-next-line import/no-cycle
import { Level } from '../constants/data-constants';
// eslint-disable-next-line import/no-cycle
import { EmptyQuestion } from './question-answer';

export interface CoachTest {
  id: string;
  testNumber: number;
  level: string;
  isChecked: boolean;
  priority: boolean;
  testPassingDate: string;
  essayAnswer: string;
  essayMark: number;
  speakingMark: number;
  comment: string;
  speakingAnswerReference: string;
}

export interface CoachCheckTestID {
  id: string;
}

export interface CoachCheckTest {
  essayMark: number;
  speakingMark: number;
  comment: string;
}
export interface CoachEmptyTopic {
  topicName: string;
  level: number;
}

export interface CoachTopic extends CoachEmptyTopic {
  id: string;
  creationDate: string;
  creatorId: string;
  creatorLastName: string;
  creatorFirstName: string;
}

export interface CoachTopicUpdate {
  id: string;
  topicName: string | undefined;
  level: number | Level;
}

export interface EmptyListening {
  id?: string;
  isEdit?: boolean;
  audioFilePath: string | undefined;
  level: number | undefined;
  questions: EmptyQuestion[];
}
