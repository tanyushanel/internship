export interface MistakeReport {
  id?: string;
  questionId?: string;
  auditionId?: string;
  description?: string;
  topicId?: string;
}

export interface MistakeGrammarReport {
  questionId: string;
  description: string;
}

export interface MistakeListeningReport {
  auditionId: string;
  questionId: string;
  description: string;
}

export interface MistakeWritingOrSpeakingReport {
  topicId: string;
  description: string;
}
