import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { CoachProfileDialogComponent } from '../coach-profile-dialog/coach-profile-dialog.component';
import { isSubstring } from '../../../helpers/filter-check';
import { CoachTest } from '../service/get-coach-tests-http.service';

@Component({
  selector: 'app-coach-profile-table',
  templateUrl: './coach-profile-table.component.html',
  styleUrls: ['./coach-profile-table.component.scss'],
})
export class CoachProfileTableComponent implements AfterViewInit, OnInit {
  @Input() results: CoachTest[] = [];

  displayedColumns: string[] = ['id', 'level', 'date', 'button'];

  idFilter = new FormControl('');

  levelFilter = new FormControl('');

  dateFilter = new FormControl('');

  filterValues = {
    id: '',
    level: '',
    date: '',
  };

  dataSource!: MatTableDataSource<CoachTest>;

  @Input() table: CoachTest[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) tableView!: MatTable<CoachTest>;

  public searchQuery = '';

  constructor(public dialog: MatDialog) {}

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

  onClick(id: number) {
    this.dialog.open(CoachProfileDialogComponent, { data: { id } });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.results);
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

  createFilter(): (filterValues: CoachTest, filter: string) => boolean {
    return function filterFunction(filterValues, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        isSubstring(filterValues.id, searchTerms.id) &&
        isSubstring(filterValues.level, searchTerms.level) &&
        isSubstring(filterValues.date.toDateString(), searchTerms.date)
      );
    };
  }
}
