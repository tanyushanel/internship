import { Level } from '../../constants/data-constants';
import { TestModule } from './test-module';

export interface Test {
  id: number;
  level: Level;
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
