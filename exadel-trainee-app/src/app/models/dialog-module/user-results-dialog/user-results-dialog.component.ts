import { Component, OnInit } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  roleId: string;
}

export interface Test {
  date: string;
  level: string;
  grammar: number;
  audition: number;
  writing: number;
  speaking: number;
}

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent implements OnInit {
  user: User = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    email: 'Ivanov@gmal.com',
    roleId: '1',
  };

  results: Test[] = [
    {
      date: '09-09-2020',
      level: 'advanced',
      grammar: 20,
      audition: 30,
      writing: 30,
      speaking: 20,
    },
    {
      date: '09-09-2020',
      level: 'advanced',
      grammar: 30,
      audition: 30,
      writing: 10,
      speaking: 20,
    },
  ];

  btnIndexes: boolean[] = new Array(this.results.length);

  ngOnInit(): void {
    this.btnIndexes.fill(true);
  }

  onShowResults(res: any, index: number): void {
    if (this.results.indexOf(res) === index) this.btnIndexes[index] = false;
  }

  onAssignBtnClick(): void {}
}
