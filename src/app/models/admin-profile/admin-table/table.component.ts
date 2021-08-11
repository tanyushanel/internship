import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ServiceComponent } from 'src/mocks/admin-mock.service';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';
import { interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import {
  AdminTestTabs,
  ServiceCoachData,
  TestData,
} from '../../../../mocks/admin-profile-utils.mock';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  AssignSelector = true;

  coaches!: ServiceCoachData;

  @Input() tableData: TestData[] = [];

  @Input() displaedColums: string[] = [];

  constructor(public dialog: MatDialog, private service: AdminTableStoreService) {}

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.service.getCoachData().subscribe((data) => {
      this.coaches = data;
    });
  }

  openDialog(element: TestData, CoachData: ServiceCoachData) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: {
        position: element.testNumber,

        coach: element.coach,
        coaches: CoachData.coaches,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.service.updateTestData(result.coach.userId, result.position);
    });
  }
}
