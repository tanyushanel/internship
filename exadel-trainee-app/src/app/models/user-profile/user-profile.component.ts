import { Component, OnInit } from '@angular/core';
import { Level } from 'src/constants/data-constants';
import { Test } from '../../interfaces/test';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results: Test[] = [
    {
      id: 1,
      date: { creationDate: new Date().toDateString() },
      level: Level.advanced,
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
      level: Level.beginner,
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
      id: 3,
      date: { creationDate: new Date().toDateString() },
      level: Level.beginner,
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
      id: 4,
      date: { creationDate: new Date().toDateString() },
      level: Level.beginner,
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

  ngOnInit() {}

  onStartButtonClick(): void {}
}
