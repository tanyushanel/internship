// eslint-disable-next-line import/no-cycle
import { Level } from '../constants/data-constants';

export interface CoachTest {
  id: string;
  level: string;
  isChecked: boolean;
  isHigh: boolean;
  date: string;
}
export interface CoachEmptyTopic {
  topicName: string;
  level: number;
}

export interface CoachTopic extends CoachEmptyTopic {
  id: string;
  creationDate: string;
  creatorId: string;
}

export interface CoachTopicUpdate {
  id: string;
  topicName: string | undefined;
  level: number | Level;
}
