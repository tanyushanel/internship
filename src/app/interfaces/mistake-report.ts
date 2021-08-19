export interface MistakeReport {
  id?: string;
  questionId?: string;
  auditionId?: string;
  description: string;
  topicId?: string;
  testId: string;
}

export interface MistakeGrammarReport {
  questionId: string;
  description: string;
  testId: string;
}

export interface MistakeListeningReport {
  auditionId: string;
  questionId: string;
  description: string;
  testId: string;
}

export interface MistakeWritingOrSpeakingReport {
  topicId: string;
  description: string;
  testId: string;
}
