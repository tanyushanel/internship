import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CoachData, MOCK_TEST, TestData } from '../../../../mocks/admin-profile-utils.mock';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  AssignSelector = false;

  data: TestData[] = [];

  assignedTests: TestData[] = [];

  notAssignedTests: TestData[] = [];

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<TestData>(MOCK_TEST);
    this.sortByIsAssign(this.dataSource.data);
    this.data = this.notAssignedTests;
  }

  displayedColumns: string[] = ['ID', 'Position', 'Level', 'Date', 'Button'];

  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource: MatTableDataSource<TestData>;

  ngOnInit(): void {}

  openDialog(positionValue: number, coachData: CoachData, Assign: boolean) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: {
        position: positionValue - 1,
        coach: coachData,
        isAssign: Assign,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.coach === undefined) return;
      const assignedTest = this.dataSource.data[result.position];
      assignedTest.coach = result.coach;
      if (!assignedTest.isAssign) {
        this.assignedTests.unshift(assignedTest);
        this.notAssignedTests.splice(this.notAssignedTests.indexOf(assignedTest), 1);
        assignedTest.isAssign = true;
        this.table.renderRows();
      }
    });
  }

  sortByIsAssign(data: TestData[]) {
    data.forEach((element) => {
      if (element.isAssign) {
        this.assignedTests.push(element);
      } else this.notAssignedTests.push(element);
    });
  }

  onTabChange(): void {
    this.AssignSelector = !this.AssignSelector;
    if (this.AssignSelector) {
      this.displayedColumns = ['ID', 'Position', 'Level', 'Date', 'Coach', 'Button'];
      this.data = this.assignedTests;
    } else {
      this.displayedColumns = ['ID', 'Position', 'Level', 'Date', 'Button'];
      this.data = this.notAssignedTests;
    }
  }
}
