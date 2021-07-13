export interface Question {
  id: number;
  questionId: Question;
  phaseId: number;
  questionText: string;
  answerId: number;
}
