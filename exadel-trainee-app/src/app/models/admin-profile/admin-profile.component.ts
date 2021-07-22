import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { MOCK_TEST, TestData } from '../../../mocks/admin-profile-utils.mock';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  AssignSelector = '0';

  isAssignTrueArray: TestData[] = [];

  isAssignFalseArray: TestData[] = [];

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<TestData>(MOCK_TEST);
  }

  displayedColumns: string[] = ['Position', 'Level', 'Date', 'Coach', 'Button'];

  displayedColumns1: string[] = ['Position', 'Level', 'Date', 'button'];

  dataSource: MatTableDataSource<TestData>;

  ngOnInit(): void {
    this.sortByIsAssign(this.dataSource.data);
  }

  openDialog(value: number) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: { position: value - 1, coach: '--' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      try {
        this.dataSource.data[result.position].coach = result.coach;
        if (this.dataSource.data[result.position].isAssign === false) {
          this.isAssignTrueArray.reverse();
          this.isAssignTrueArray.push(this.dataSource.data[result.position]);
          this.isAssignTrueArray.reverse();
          this.isAssignFalseArray.splice(
            this.isAssignFalseArray.indexOf(this.dataSource.data[result.position]),
            1,
          );
          this.dataSource.data[result.position].isAssign = true;
        }
      } catch (e) {
        console.log(e);
      }
    });
  }

  sortByIsAssign(data: TestData[]) {
    data.forEach((element) => {
      if (element.isAssign) {
        this.isAssignTrueArray.push(element);
      } else this.isAssignFalseArray.push(element);
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
