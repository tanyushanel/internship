import { Role } from '../../../constants/route-constant';

export enum Level {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced',
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  userPhoto?: string;
}

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

export interface TestModule {
  id: number;
  mark?: number;
}
