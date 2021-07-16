import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_TESTS, TestData } from '../../../mocks/users-utils.mock';
import { CoachProfileDialogComponent } from './coach-profile-dialog/coach-profile-dialog.component';


@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'level', 'button'];

  dataSource: MatTableDataSource<TestData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(MOCK_TESTS);
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

  onClick(id: number) {
    this.dialog.open(CoachProfileDialogComponent, { data: { id } });
  }
