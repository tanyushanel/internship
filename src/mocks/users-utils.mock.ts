export interface CoachEditorTest {
  id: string;
  level: string;
}

export interface DialogData {
  id: number;
  level: string;
}
export function createNewAuditionQuestionTest(id: number) {
  return {
    id: id.toString(),
    level: 5,
    creationDate: '2021-08-04T05:37:12.2158831-07:00',
    creatorId: '2cfaa429-e45c-415c-27cf-08d9574493b2',
    nameQuestion: `Audition ${id}`,
    questionNumber: 284,
  };
}

export function createNewWritingAndSpeakingQuestionTest(id: number) {
  return {
    id: id.toString(),
    level: 4,
    creationDate: '2021-08-04T05:37:12.2158831-07:00',
    creatorId: '2cfaa429-e45c-415c-27cf-08d9574493b2',
    nameQuestion: `WritingAndSpeaking ${id}`,
    questionNumber: 284,
  };
}

export const MOCK_AUDITION_QUESTIONS = Array.from({ length: 80 }, (_, k) =>
  createNewAuditionQuestionTest(k + 1),
);
export const MOCK_WRITING_AND_SPEAKING_QUESTIONS = Array.from({ length: 100 }, (_, k) =>
  createNewWritingAndSpeakingQuestionTest(k + 1),
);
