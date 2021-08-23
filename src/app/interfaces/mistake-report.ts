export interface MistakeReport {
  id: string;
  questionId?: string;
  auditionId?: string;
  description: string;
  topicId?: string;
  testId: string;
  creationDate?: string;
  coachName?: string;
}

export interface GetMistakeReportID {
  questionId: string;
  auditionId: string;
  topicId: string;
}

export interface SendMistakeReport {
  questionId?: string;
  auditionId?: string;
  description: string;
  topicId?: string;
  testId: string;
}

export interface MistakeGrammarReport {
  id: string;
  questionId: string;
  description: string;
  testId: string;
  creationDate?: string;
}

export interface MistakeListeningReport {
  id: string;
  auditionId: string;
  questionId: string;
  description: string;
  testId: string;
  creationDate?: string;
}

export interface MistakeWritingOrSpeakingReport {
  id: string;
  topicId: string;
  description: string;
  testId: string;
  creationDate?: string;
}
