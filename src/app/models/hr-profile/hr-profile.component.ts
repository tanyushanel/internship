import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersList, UserTable } from 'src/app/interfaces/test';
import { User } from 'src/app/interfaces/user.interfaces';
import { UserResultsDialogComponent } from '../dialog-module/user-results-dialog/user-results-dialog.component';
import { HrProfileDialogComponent } from './hr-profile-dialog/hr-profile-dialog.component';
import { isSubstring } from '../../helpers/filter-check';
import { UserTableStoreService } from './services/user-table-store.service';

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.scss'],
})
export class HrProfileComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'assessment', 'info'];

  results$: Observable<UsersList | null> = this.userTableStoreService.usersResults$;

  idFilter = new FormControl('');

  firstNameFilter = new FormControl('');

  lastNameFilter = new FormControl('');

  filterValues = {
    firstName: '',
    lastName: '',
  };

  public searchQuery = '';

  public dataSource!: MatTableDataSource<UserTable>;

  public usersTestarg!: UserTable[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(public dialog: MatDialog, private userTableStoreService: UserTableStoreService) {}

  ngOnInit() {
    this.userTableStoreService.usersSubject$.subscribe((value) => {
      if (value) {
        this.dataSource = new MatTableDataSource(value.results);
        this.dataSource.filterPredicate = this.createFilter();
      }
    });

    this.userTableStoreService.getUsersResults();
    this.firstNameFilter.valueChanges.subscribe((firstName) => {
      this.filterValues.firstName = firstName;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.lastNameFilter.valueChanges.subscribe((lastName) => {
      this.filterValues.lastName = lastName;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  createFilter(): (filterValues: UserTable, filter: string) => boolean {
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
      data: { firstName: row.firstName, lastName: row.lastName },
    });
  }

  onClick() {
    this.dialog.open(HrProfileDialogComponent);
  }
}
