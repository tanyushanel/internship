/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/constants/route-constant';
import { User, Level, Test, TestModule } from '../mocks';

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent {
  user: User = {
    id: 1,
    firstName: 'Сальвадор',
    lastName: 'Бананович',
    email: 'salsa@mail.com',
    role: Role.couch,
    userPhoto: '',
  };

  results: Test[] = [
    {
      id: 1,
      date: { assignmentEndDate: new Date().toDateString() },
      level: Level.beginner,
      content: {
        grammar: {
          id: 1,
          mark: 30,
        },
        audition: {
          id: 1,
          mark: 10,
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
    },
    {
      id: 2,
      date: { assignmentEndDate: new Date().toDateString() },
      level: Level.beginner,
      content: {
        grammar: {
          id: 1,
          mark: 30,
        },
        audition: {
          id: 1,
          mark: 30,
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
    },
  ];

  onAssignBtnClick(): void {}
}
