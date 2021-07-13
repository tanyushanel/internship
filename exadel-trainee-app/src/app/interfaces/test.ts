import { Level } from '../../constants/route-constant';

export interface Test {
  id: number;
  userId: number;
  hrId?: number;
  coachId?: number;
  creationDate: string;
  assignmentStartDate: string;
  assignmentEndDate: string;
  level: Level;
  grammarId: number;
  grammarMark?: number;
  auditionId: number;
  auditionMark?: number;
  essayId: number;
  essayMark?: number;
  speakingId: number;
  speakingMark?: number;
  feedback?: string;
}
