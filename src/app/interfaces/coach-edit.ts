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
}

export interface CoachCheckTestID {
  id: string;
}

export interface CoachCheckTest {
  essayMark: number;
  speakingMark: number;
  comment: string;
}
