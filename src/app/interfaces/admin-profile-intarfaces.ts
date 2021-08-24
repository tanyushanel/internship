export interface CoachData {
  firstName: string | null;
  lastName: string | null;
  testAmount: number | null;
  userId: string | null;
  userName: string | null;
}

export interface ServiceCoachData {
  coaches: CoachData[];
}

export interface DialogInterface {
  coaches: CoachData[];
  id: number;
  coach: CoachData[];
}

export interface UpdateCoachesData {
  testId: string;
  coachId: string;
}

export interface ServiceTestData {
  results: TestData[];
}

export interface TestData {
  id: number;
  priority: boolean | null;
  testNumber: number;
  testPassingDate: number;
  level: string;
  coach: string | null;
  isAssign: boolean;
}

const MOCK_EMPTY_COACH: CoachData = {
  firstName: null,
  lastName: null,
  testAmount: null,
  userId: null,
  userName: null,
};

export enum AdminTestTabs {
  highPriority = 'High Priority',
  notAssigned = 'Not Assigned',
  assigned = 'Assigned',
}
