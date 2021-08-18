import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Level } from '../../constants/data-constants';
import { TestResult } from '../../interfaces/test';

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
export class UserResultsTableComponent implements AfterViewInit, OnChanges {
  @Input() results$!: Observable<TestResult[]>;

  @Input() results: TestResult[] = [];

  @Input() levels: Level[] = [];

  columnsToDisplay: string[] = ['id', 'testPassingDate', 'level', 'result'];

  isOpen = false;

  get resultsCount() {
    return this.results?.length;
  }

  get columnsCount() {
    return this.columnsToDisplay.length;
  }

  expandedElement: TestResult | undefined;

  dataSource: MatTableDataSource<TestResult>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.results);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.results?.currentValue) {
      this.dataSource.data = changes.results.currentValue;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    setTimeout(() => {
      const sortState: Sort = { active: 'date', direction: 'desc' };
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);
    }, 10);
  }

  onUnrollToggle(): void {
    this.isOpen = !this.isOpen;
  }
}
