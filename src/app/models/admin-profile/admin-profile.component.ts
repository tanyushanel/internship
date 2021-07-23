import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { MOCK_TEST, TestData } from '../../../mocks/admin-profile-utils.mock';

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
  notAssign = false;

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['Position', 'Level', 'Date', 'Coach'];

  displayedColumns1: string[] = ['Position', 'Level', 'Date', 'button'];

  dataSource = MOCK_TEST;

  expandedElement: TestData | undefined;

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(AdminDialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource[0].coach = result;
    });
  }

  onClickNotAssign(): boolean {
    return (this.notAssign = !this.notAssign);
  }
}
