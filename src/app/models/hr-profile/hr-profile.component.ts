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
import { UserTableService } from './services/user-table.service';

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.scss'],
})
export class HrProfileComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'assessment', 'info'];

  filterFirstNameValue = '';

  filterLastNameValue = '';

  dataSource: UsersList | null = null;

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
    this.userTableService
      .findAll(1, 10)
      .pipe(map((userList: UsersList) => (this.dataSource = userList)))
      .subscribe();
  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    const size = event.pageSize;

    if (this.filterFirstNameValue == null || this.filterLastNameValue == null) {
      page += 1;
      this.userTableService
        .findAll(page, size)
        .pipe(map((userList: UsersList) => (this.dataSource = userList)))
        .subscribe();
    } else {
      this.userTableService
        .paginateFirstName(page, size, this.filterFirstNameValue)
        .pipe(map((userList: UsersList) => (this.dataSource = userList)))
        .subscribe();
      this.userTableService
        .paginateLastName(page, size, this.filterLastNameValue)
        .pipe(map((userList: UsersList) => (this.dataSource = userList)))
        .subscribe();
    }
  }

  findFirstName(firstName: string) {
    this.userTableService
      .paginateFirstName(1, 10, firstName)
      .pipe(map((userList: UsersList) => (this.dataSource = userList)))
      .subscribe();
  }

  findLastName(lastName: string) {
    this.userTableService
      .paginateLastName(1, 10, lastName)
      .pipe(map((userList: UsersList) => (this.dataSource = userList)))
      .subscribe();
  }
}
