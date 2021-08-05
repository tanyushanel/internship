import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MOCK_TEST, TestData } from '../../../../mocks/admin-profile-utils.mock';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  AssignSelector = true;

  index = 0;

  data: TestData[] = [];

  dataPrototype: TestData[] = [];

  assignedTests: TestData[] = [];

  notAssignedTests: TestData[] = [];

  constructor(
    public dialog: MatDialog,
    private readonly http: HttpClient,
    private service: ServiceComponent,
  ) {
    this.dataSource = new MatTableDataSource<TestData>(MOCK_TEST);
    this.service.getData().subscribe((data) => {
      this.data = data;
      this.sortByIsAssign(this.data);
      this.onTabChange();
    });
  }

  displayedColumns: string[] = ['ID', 'Position', 'Level', 'Date', 'Button'];

  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource: MatTableDataSource<TestData>;

  ngOnInit(): void {}

  openDialog(element: TestData) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: {
        position: element.position,
        coach: element.coach,
        isAssign: element.isAssign,
      },
    });
    this.index = this.data.indexOf(element);
    dialogRef.afterClosed().subscribe((result) => {
      if (result.coach === undefined) return;
      const assignedTest = this.data[this.index];
      assignedTest.coach = result.coach;
      if (!assignedTest.isAssign) {
        this.assignedTests.unshift(assignedTest);
        this.notAssignedTests.splice(this.notAssignedTests.indexOf(assignedTest), 1);
        assignedTest.isAssign = true;
        this.service.postData(assignedTest);
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
      this.dataPrototype = this.assignedTests;
    } else {
      this.displayedColumns = ['ID', 'Position', 'Level', 'Date', 'Button'];
      this.dataPrototype = this.notAssignedTests;
    }
  }
}
