import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent implements OnInit {
  user: any = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    email: 'Ivanov@gmal.com',
    roleId: 1,
  };

  results: any = [
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

  hideResultBtnIndexes: boolean[] = new Array(this.results.length);

  ngOnInit(): void {
    this.hideResultBtnIndexes.fill(true);
  }

  onShowResults(res: any, index: number): void {
    if (this.results.indexOf(res) === index) this.hideResultBtnIndexes[index] = false;
  }

  onAssignBtnClick(): void {}
}
