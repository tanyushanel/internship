export enum Level {
  Elementary = 'Elementary',
  PreIntermediate = 'Pre-intermediate',
  Intermediate = 'Intermediate',
  UpperIntermediate = 'Upper-intermediate',
  Advanced = 'Advanced',
}

export enum CoachTestTabs {
  unchecked = 'In Review',
  highPriority = 'High Priority',
  checked = 'Reviewed',
}

export enum UserRole {
  User = 'User',
  HumanResourceManager = 'HumanResourceManager',
  Coach = 'Coach',
  Administrator = 'Administrator',
}

export enum CoachEditorTabs {
  grammar = 'Grammar',
  audition = 'Listening',
  writingAndSpeaking = 'Writing & Speaking',
}

export enum GrammarAnswers {
  first = 'A)',
  second = 'B)',
  third = 'C)',
  fourth = 'D)',
}

export enum FilterFields {
  id = 'id',
  level = 'level',
  date = 'date',
}
