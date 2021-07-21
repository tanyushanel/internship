import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TestResult } from 'src/app/interfaces/result';
import { MOCK_TEST_RESULTS } from '../../../constants/mock-test-results';

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
  MOCK_TEST_RESULTS: TestResult[] = [];

  columnsToDisplay: string[] = ['id', 'date', 'level', 'result'];

  expandedElement: TestResult | undefined;

  dataSource = new MatTableDataSource(MOCK_TEST_RESULTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}
}
