import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from 'src/app/interfaces/test';

@Component({
  selector: 'app-user-results-table',
  templateUrl: './user-results-table.component.html',
  styleUrls: ['./user-results-table.component.scss'],
})
export class UserResultsTableComponent implements AfterViewInit {
  @Input() results: Test[] = [];

  dataSource = new MatTableDataSource(this.results);

  displayedColumns: any[] = [
    'id',
    'date',
    'level',
    'grammar',
    'audition',
    'essay',
    'speaking',
    'result',
    'feedback',
  ];

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
