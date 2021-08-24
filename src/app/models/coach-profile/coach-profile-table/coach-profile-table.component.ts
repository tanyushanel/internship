import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { CoachProfileDialogComponent } from '../coach-profile-dialog/coach-profile-dialog.component';
import { isSubstring } from '../../../helpers/filter-check';
import { CoachTest } from '../../../interfaces/coach-edit';
import { languageLevel } from '../../../constants/data-constants';

@Component({
  selector: 'app-coach-profile-table',
  templateUrl: './coach-profile-table.component.html',
  styleUrls: ['./coach-profile-table.component.scss'],
})
export class CoachProfileTableComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() selectTab = '';

  languageLevel = languageLevel;

  displayedColumns: string[] = ['id', 'level', 'date', 'button'];

  idFilter = new FormControl('');

  levelFilter = new FormControl('');

  dateFilter = new FormControl('');

  filterValues = {
    testNumber: '',
    level: '',
    testPassingDate: '',
  };

  dataSource: MatTableDataSource<CoachTest>;

  @Input() table: CoachTest[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) tableView!: MatTable<CoachTest>;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.table);
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.table?.currentValue) {
      this.dataSource.data = changes.table.currentValue;
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

  onClick(
    essayAnswer: string,
    id: string,
    speakingMark: number,
    essayMark: number,
    comment: string,
    speakingAnswerReference: string,
    priority: boolean,
  ) {
    this.dialog.open(CoachProfileDialogComponent, {
      data: {
        essayAnswer,
        id,
        speakingMark,
        essayMark,
        comment,
        speakingAnswerReference,
        priority,
      },
      disableClose: true,
    });
  }

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

  createFilter(): (filterValues: CoachTest, filter: string) => boolean {
    return function filterFunction(filterValues, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        isSubstring(filterValues.testNumber, searchTerms.testNumber) &&
        isSubstring(languageLevel[filterValues.level], searchTerms.level) &&
        isSubstring(filterValues.testPassingDate, searchTerms.testPassingDate)
      );
    };
  }
}
