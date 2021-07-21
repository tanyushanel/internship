import { Level } from '../../constants/data-constants';
import { TestModule } from './test-module';

export interface TestResult {
  id: number;
  level: Level;
  userId: number;
  testId: number;
  date: { creationDate?: string };
  content: {
    grammar: TestModule;
    audition: TestModule;
    essay: TestModule;
    speaking: TestModule;
  };
  feedback?: string;
}
