import { Test } from 'src/app/interfaces/test';
import { Level } from 'src/constants/data-constants';

export const results: Test[] = [
  {
    id: 1,
    date: { creationDate: new Date().toDateString() },
    level: Level.UpperIntermediate,
    content: {
      grammar: {
        id: 1,
        mark: 10,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 20,
      },
      speaking: {
        id: 1,
        mark: 10,
      },
    },
    feedback: '',
  },
  {
    id: 2,
    date: { creationDate: new Date().toDateString() },
    level: Level.Intermediate,
    content: {
      grammar: {
        id: 1,
        mark: 10,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 20,
      },
      speaking: {
        id: 1,
        mark: 10,
      },
    },
    feedback: '',
  },
  {
    id: 3,
    date: { creationDate: new Date().toDateString() },
    level: Level.Elementary,
    content: {
      grammar: {
        id: 1,
        mark: 10,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 20,
      },
      speaking: {
        id: 1,
        mark: 10,
      },
    },
    feedback: '',
  },
  {
    id: 4,
    date: { creationDate: new Date().toDateString() },
    level: Level.Advanced,
    content: {
      grammar: {
        id: 1,
        mark: 10,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 20,
      },
      speaking: {
        id: 1,
        mark: 10,
      },
    },
    feedback: '',
  },
  {
    id: 5,
    date: { creationDate: new Date().toDateString() },
    level: Level.UpperIntermediate,
    content: {
      grammar: {
        id: 1,
        mark: 10,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 20,
      },
      speaking: {
        id: 1,
        mark: 10,
      },
    },
    feedback: '',
  },
  {
    id: 6,
    date: { creationDate: new Date().toDateString() },
    level: Level.Advanced,
    content: {
      grammar: {
        id: 1,
        mark: 10,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 20,
      },
      speaking: {
        id: 1,
        mark: 10,
      },
    },
    feedback: '',
  },

  {
    id: 7,
    date: { creationDate: new Date().toDateString() },
    level: Level.Intermediate,
    content: {
      grammar: {
        id: 1,
        mark: 30,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 70,
      },
      speaking: {
        id: 1,
        mark: 0,
      },
    },
    feedback: '',
  },
  {
    id: 8,
    date: { creationDate: new Date().toDateString() },
    level: Level.Advanced,
    content: {
      grammar: {
        id: 1,
        mark: 30,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 10,
      },
      speaking: {
        id: 1,
        mark: 10,
      },
    },
    feedback: '',
  },
  {
    id: 9,
    date: { creationDate: new Date().toDateString() },
    level: Level.Elementary,
    content: {
      grammar: {
        id: 1,
        mark: 30,
      },
      audition: {
        id: 1,
        mark: 20,
      },
      essay: {
        id: 1,
        mark: 20,
      },
      speaking: {
        id: 1,
        mark: 10,
      },
    },
    feedback: 'OK',
  },
];
