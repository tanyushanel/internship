import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersList, UserTable } from 'src/app/interfaces/test';
import { ApiAssignTest, GetHrUser, User } from 'src/app/interfaces/user.interfaces';
import { TestStoreService } from 'src/app/services/store/test-store.service';
import { map, tap } from 'rxjs/operators';
import { UserResultsDialogComponent } from '../dialog-module/user-results-dialog/user-results-dialog.component';
import { HrProfileDialogComponent } from './hr-profile-dialog/hr-profile-dialog.component';
import { isSubstring } from '../../helpers/filter-check';
import { UserTableStoreService } from './services/user-table-store.service';
import { FilterParams, SortType, UserTableService } from './services/user-table.service';

const DEFAULT_SIZE = 10;
const DEFAULT_PAGE = 1;

function getNextSortType(sortType: SortType) {
  if (sortType === null) {
    return 'desc';
  }
  if (sortType === 'desc') {
    return 'asc';
  }
  if (sortType === 'asc') {
    return null;
  }
  return null;
}

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.scss'],
})
export class HrProfileComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'assessment', 'info'];

  filterFirstNameValue: string | null = null;

  filterLastNameValue: string | null = null;

  sortOn: 'firstName' | 'lastName' = 'firstName';

  currentFirstNameSortType: SortType = null;

  currentLastNameSortType: SortType = null;

  dataSource: UsersList = {
    pageSize: DEFAULT_SIZE,
    currentPage: DEFAULT_PAGE,
    results: [],
    rowCount: 0,
  };

  pageEvent: PageEvent | undefined;

  constructor(
    public dialog: MatDialog,
    private userTableService: UserTableService,
    private testStoreService: TestStoreService,
  ) {}

  ngOnInit(): void {
    this.initDataSource();
  }

  onOpenInfoDialog(row: GetHrUser): void {
    this.testStoreService.getAllUserResults(row.userId);
    this.dialog.open(UserResultsDialogComponent, {
      width: '45rem',
      data: { ...row },
    });
  }

  onClick(userId: string) {
    this.dialog.open(HrProfileDialogComponent, {
      data: { userId } as ApiAssignTest,
    });
  }

  initDataSource() {
    this.getUsers({});
  }

  onPaginateChange({ pageIndex, pageSize }: PageEvent) {
    this.getUsers({
      page: pageIndex + 1,
      size: pageSize,
    });
  }

  findFirstName(firstName: string | null) {
    this.getUsers({
      page: DEFAULT_PAGE,
      size: DEFAULT_SIZE,
      firstName,
    });
  }

  findLastName(lastName: string | null) {
    this.getUsers({
      page: DEFAULT_PAGE,
      size: DEFAULT_SIZE,
      lastName,
    });
  }

  onChangeFirstName() {
    this.sortOn = 'firstName';
    this.currentLastNameSortType = null;
    this.currentFirstNameSortType = getNextSortType(this.currentFirstNameSortType);

    this.getUsers({});
  }

  onChangeLastName() {
    this.sortOn = 'lastName';

    this.currentFirstNameSortType = null;
    this.currentLastNameSortType = getNextSortType(this.currentLastNameSortType);

    this.getUsers({});
  }

  getUsers(filterParams: Partial<FilterParams>) {
    const sortDirection =
      this.sortOn === 'firstName' ? this.currentFirstNameSortType : this.currentLastNameSortType;

    this.userTableService
      .getUsersByFilter({
        page: filterParams.page || this.dataSource.currentPage,
        size: filterParams.size || this.dataSource.pageSize,
        firstName: filterParams.firstName || this.filterFirstNameValue,
        lastName: filterParams.lastName || this.filterLastNameValue,
        sortDirection,
        sortOn: filterParams.sortOn || this.sortOn,
      })
      .subscribe((res: UsersList) => {
        this.dataSource = res;
      });
  }
}
