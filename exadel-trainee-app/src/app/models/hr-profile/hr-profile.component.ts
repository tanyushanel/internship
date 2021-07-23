import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserResultsDialogComponent } from '../dialog-module/user-results-dialog/user-results-dialog.component';
import { MOCK_USERS, UserData } from '../../../mocks/users-utils.mock';
import { User } from '../../interfaces/user';
import { HrProfileDialogComponent } from './hr-profile-dialog/hr-profile-dialog.component';

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.scss'],
})
export class HrProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'assessment', 'info'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(MOCK_USERS);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
