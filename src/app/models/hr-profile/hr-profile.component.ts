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

  createFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function (
      data: {
        id: { toString: () => string };
        firstName: string;
        lastName: { toString: () => string };
      },
      filter: string,
    ): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1 &&
        data.firstName.toLowerCase().indexOf(searchTerms.firstName) !== -1 &&
        data.lastName.toString().toLowerCase().indexOf(searchTerms.lastName) !== -1
      );
    };
    return filterFunction;
  }

  onKey(event: any) {
    this.searchQuery = event.target.value;
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
