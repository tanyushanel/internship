import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { Test } from 'src/app/interfaces/test';
import { Level } from 'src/constants/data-constants';

@Component({
  selector: 'app-user-results-table',
  templateUrl: './user-results-table.component.html',
  styleUrls: ['./user-results-table.component.scss'],
})
export class UserResultsTableComponent implements AfterViewInit {
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
    },
  ];

  dataSource = new MatTableDataSource(this.results);

  displayedColumns: any[] = ['id', 'date', 'level', 'content'];

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
