import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { MOCK_TEST, TestData } from '../../../mocks/admin-profile-utils.mock';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<TestData>(MOCK_TEST);
    this.sortByIsAssign(this.dataSource.data);
  }

  AssignSelector = '0';

  assignedTests: TestData[] = [];

  notAssignedTests: TestData[] = [];

  displayedColumns: string[] = ['ID', 'Position', 'Level', 'Date', 'Coach', 'Button'];

  displayedColumns1: string[] = ['ID', 'Position', 'Level', 'Date', 'button'];

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource: MatTableDataSource<TestData>;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  openDialog(value: number) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: { position: value - 1, coach: '--' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      const assignedTest = this.dataSource.data[result.position];
      try {
        assignedTest.coach = result.coach;
        if (assignedTest.isAssign === false) {
          this.assignedTests.unshift(assignedTest);
          this.notAssignedTests.splice(this.notAssignedTests.indexOf(assignedTest), 1);
          assignedTest.isAssign = true;
          this.table.renderRows();
        }
        // eslint-disable-next-line no-empty
      } catch (e) {}
    });
  }

  sortByIsAssign(data: TestData[]) {
    data.forEach((element) => {
      if (element.isAssign) {
        this.assignedTests.push(element);
      } else this.notAssignedTests.push(element);
    });
  }

  onTabChange(selector: string): void {
    if (selector === 'Not Assigned') {
      this.AssignSelector = '0';
    } else if (selector === 'Assigned') {
      this.AssignSelector = '1';
    }
  }
}
