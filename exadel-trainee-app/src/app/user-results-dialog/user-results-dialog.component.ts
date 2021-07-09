import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent implements OnInit {
  resultArr = [
    {
      date: '09-09-2020',
      score: 80,
      level: 'advanced',
      grammar: 20,
      listening: 30,
      writing: 30,
      speaking: 20,
    },
    {
      date: '09-09-2020',
      score: 100,
      level: 'advanced',
      grammar: 20,
      listening: 30,
      writing: 30,
      speaking: 20,
    },
  ];

  ngOnInit(): void {}
}
