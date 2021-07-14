import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Level, Test } from './mocks';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  results: Test[] = [
    {
      id: 1,
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
    },
  ];

  dataSource = new MatTableDataSource(this.results);

  displayedColumns: any[] = ['id', 'date', 'level', 'content'];

  // @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {}
}
