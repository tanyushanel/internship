import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from 'src/app/interfaces/test';
import { Level } from '../../../constants/data-constants';

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
  @Input() results: Test[] = [];

  @Input() levels: Level[] = [];

  columnsToDisplay: string[] = ['id', 'date', 'level', 'result'];

  isOpen = false;

  get columnsCount() {
    return this.columnsToDisplay.length;
  }

  expandedElement: Test | undefined;

  dataSource!: MatTableDataSource<Test>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.results);
  }

  onUnrollToggle(): void {
    this.isOpen = !this.isOpen;
  }
}
