import { Priority, Level } from '../../constants/data-constants';
import { Audition } from './audition';
import { Question } from './question-answer';
import { TestModule } from './test-module';
import { User } from './user';

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
    grammar: TestModule;
    audition: TestModule;
    essay: TestModule;
    speaking: TestModule;
  };
  feedback?: string;
}

export interface FullTestToPass {
  id: number;
  auditionId: Audition['id'];
  essayId: number;
  speakingId: number;
  testQuestions: Question[];
}
