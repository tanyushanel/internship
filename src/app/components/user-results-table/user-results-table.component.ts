import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { isSubstring } from 'src/app/helpers/filter-check';
import { languageLevel } from '../../constants/data-constants';
import { TestResult, TestResultWithTotal } from '../../interfaces/test';

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
export class UserResultsTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() results: TestResult[] = [];

  resultsWithTotal: TestResultWithTotal[] = [];

  languageLevel = languageLevel;

  columnsToDisplay: string[] = ['id', 'testPassingDate', 'level', 'result'];

  isOpen = false;

  idFilter = new FormControl('');

  levelFilter = new FormControl('');

  dateFilter = new FormControl('');

  filterValues = {
    testNumber: '',
    level: '',
    testPassingDate: '',
  };

  get resultsCount() {
    return this.results?.length;
  }

  get columnsCount() {
    return this.columnsToDisplay.length;
  }

  expandedElement: TestResult | undefined;

  dataSource!: MatTableDataSource<TestResultWithTotal>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.idFilter.valueChanges.subscribe((testNumber) => {
      this.filterValues.testNumber = testNumber;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.levelFilter.valueChanges.subscribe((level) => {
      this.filterValues.level = level;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.dateFilter.valueChanges.subscribe((testPassingDate) => {
      this.filterValues.testPassingDate = testPassingDate;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (filterValues: TestResultWithTotal, filter: string) => boolean {
    return (filterValues, filter): boolean => {
      const searchTerms = JSON.parse(filter);

      return (
        isSubstring(filterValues.testNumber, searchTerms.testNumber) &&
        isSubstring(languageLevel[filterValues.level], searchTerms.level) &&
        isSubstring(filterValues.testPassingDate, searchTerms.testPassingDate)
      );
    };
  }

  ngOnChanges(): void {
    if (this.results) {
      this.resultsWithTotal = this.results.map((value) => {
        return {
          ...value,
          result: this.calculateResult(
            value.grammarMark,
            value.auditionMark,
            value.essayMark,
            value.speakingMark,
          ),
        };
      });
      this.dataSource = new MatTableDataSource(this.resultsWithTotal);
      this.dataSource.filterPredicate = this.createFilter();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const sortState: Sort = { active: 'testPassingDate', direction: 'desc' };
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);
    }, 10);
  }

  onUnrollToggle(): void {
    this.isOpen = !this.isOpen;
  }

  calculateResult(
    grammarMark: number,
    auditionMark: number,
    essayMark: number,
    speakingMark: number,
  ): number {
    return grammarMark + auditionMark + essayMark + speakingMark;
  }
}
