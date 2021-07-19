import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { MOCK_TEST, TestData } from '../../../mocks/admin-profile-utils.mock';

export interface SelectedValue {
  position: number;
  coach: string;
}

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminProfileComponent implements OnInit {
  AssignSelector = '0';

  selected: SelectedValue | undefined;

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['Position', 'Level', 'Date', 'Coach'];

  displayedColumns1: string[] = ['Position', 'Level', 'Date', 'button'];

  dataSource = MOCK_TEST;

  expandedElement: TestData | undefined;

  ngOnInit(): void {}

  openDialog(value: any) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: { position: value - 1, coach: '--' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      //  this.selected?.coach=(result.coach);
      //  this.selected?.position=result.position;
      this.dataSource[result.position].coach = result.coach;
      console.log(this.dataSource[result.position]);
    });
  }

  onClickNotAssigned(): void {
    this.AssignSelector = '0';
    console.log(this.AssignSelector);
  }

  onClickAssigned(): void {
    this.AssignSelector = '1';
    console.log(this.AssignSelector);
  }

  onClickReAssigned(): void {
    this.AssignSelector = '2';
    console.log(this.AssignSelector);
  }
}
