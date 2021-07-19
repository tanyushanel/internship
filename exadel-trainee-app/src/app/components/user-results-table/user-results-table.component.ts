import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Test } from 'src/app/interfaces/test';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { results } from 'src/constants/mock-test-data';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table/table-data-source';

@Component({
  selector: 'app-user-results-table',
  templateUrl: './user-results-table.component.html',
  styleUrls: ['./user-results-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserResultsTableComponent implements OnInit, AfterViewInit {
  results!: Test[];

  columnsToDisplay: string[] = ['id', 'date', 'level', 'result'];

  expandedElement!: Test;

  dataSource!: MatTableDataSource<Test[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.results = results;
  }
}
