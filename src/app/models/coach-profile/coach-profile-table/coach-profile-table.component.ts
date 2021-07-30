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
import { TestData } from '../../../../mocks/users-utils.mock';
import { CoachProfileDialogComponent } from '../coach-profile-dialog/coach-profile-dialog.component';

@Component({
  selector: 'app-coach-profile-table',
  templateUrl: './coach-profile-table.component.html',
  styleUrls: ['./coach-profile-table.component.scss'],
})
export class CoachProfileTableComponent implements AfterViewInit, OnChanges, OnInit {
  displayedColumns: string[] = ['id', 'level', 'date', 'button'];

  idFilter = new FormControl('');

  levelFilter = new FormControl('');

  dateFilter = new FormControl('');

  filterValues = {
    id: '',
    level: '',
    date: '',
  };

  dataSource: MatTableDataSource<TestData>;

  @Input() table: TestData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) tableView!: MatTable<TestData>;

  public searchQuery = '';

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.table);
    this.dataSource.data = this.table;
    this.dataSource.filterPredicate = this.createFilter();
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.table.currentValue) {
      this.dataSource.data = changes.table.currentValue;
    }
  }

  onClick(id: number) {
    this.dialog.open(CoachProfileDialogComponent, { data: { id } });
  }

  ngOnInit(): void {
    this.idFilter.valueChanges.subscribe((id) => {
      this.filterValues.id = id;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.levelFilter.valueChanges.subscribe((level) => {
      this.filterValues.level = level;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.dateFilter.valueChanges.subscribe((date) => {
      this.filterValues.date = date;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function (
      data: { id: { toString: () => string }; level: string; date: { toString: () => string } },
      filter: string,
    ): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1 &&
        data.level.toLowerCase().indexOf(searchTerms.level) !== -1 &&
        data.date.toString().toLowerCase().indexOf(searchTerms.date) !== -1
      );
    };
    return filterFunction;
  }

  onKey(event: any) {
    this.searchQuery = event.target.value;
  }
}
