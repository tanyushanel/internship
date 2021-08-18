import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = value;
    }
  }

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource(this.results);
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    // this.dataSource.sort = this.sort;
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.results);
  }

  onUnrollToggle(): void {
    this.isOpen = !this.isOpen;
  }
}
