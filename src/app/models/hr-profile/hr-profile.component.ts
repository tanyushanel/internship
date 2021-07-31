import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { UserResultsDialogComponent } from '../dialog-module/user-results-dialog/user-results-dialog.component';
import { MOCK_USERS, UserData } from '../../../mocks/users-utils.mock';
import { User } from '../../interfaces/user';
import { HrProfileDialogComponent } from './hr-profile-dialog/hr-profile-dialog.component';
import { isSubstring } from '../coach-profile-editor/editor-table/editor-table.component';

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.scss'],
})
export class HrProfileComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'assessment', 'info'];

  idFilter = new FormControl('');

  firstNameFilter = new FormControl('');

  lastNameFilter = new FormControl('');

  filterValues = {
    id: '',
    firstName: '',
    lastName: '',
  };

  public searchQuery = '';

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(MOCK_USERS);
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.idFilter.valueChanges.subscribe((id) => {
      this.filterValues.id = id;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.firstNameFilter.valueChanges.subscribe((firstName) => {
      this.filterValues.firstName = firstName;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.lastNameFilter.valueChanges.subscribe((lastName) => {
      this.filterValues.lastName = lastName;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (filterValues: UserData, filter: string) => boolean {
    return (filterValues, filter): boolean => {
      const searchTerms = JSON.parse(filter);
      return (
        isSubstring(filterValues.id, searchTerms.id) &&
        isSubstring(filterValues.firstName, searchTerms.firstName) &&
        isSubstring(filterValues.lastName, searchTerms.lastName)
      );
    };
  }

  onOpenInfoDialog(row: User): void {
    this.dialog.open(UserResultsDialogComponent, {
      width: '35rem',
      data: { id: row.id, firstName: row.firstName, lastName: row.lastName },
    });
  }

  onClick(id: number) {
    this.dialog.open(HrProfileDialogComponent, { data: { id } });
  }
}
