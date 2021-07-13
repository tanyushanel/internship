import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { createNewUser } from 'src/mocks/users-utils.mock';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'button'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
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

  OnClick(id: number) {
    console.log('Click', id);
  }
}
