import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import {
  ServiceCoachData,
  TestData,
  UpdateCoachesData,
} from '../../../interfaces/admin-profile-intarfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  Level: string[] = [
    'Elementary',
    'PreIntermediate',
    'Intermediate',
    'UpperIntermediate',
    'Advanced',
  ];

  AssignSelector = true;

  coachUpdate: UpdateCoachesData | undefined;

  temp: string | null | undefined;

  @Input() tableData!: TestData[];

  @Input() coachData!: ServiceCoachData | null;

  dataSource: MatTableDataSource<TestData>;

  displaedColumshasCoach = ['testNumber', 'Level', 'Date', 'Coach', 'Button'];

  constructor(public dialog: MatDialog, private service: AdminTableStoreService) {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {}

  openDialog(element: TestData, coachesData: ServiceCoachData | null) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: {
        id: element.id,
        coach: element.coach,
        coaches: coachesData?.coaches,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result !== undefined) {
        this.coachUpdate = {
          testId: result?.id,
          coachId: result?.coach?.userId,
        };
        this.service.updateTestData(this.coachUpdate, result.id);
      }
    });
  }

  coachName(Id: string) {
    if (this.coachData !== null) {
      for (let i = 0; i < this.coachData.coaches.length; i += 1) {
        if (Id === this.coachData.coaches[i].userId) {
          this.temp = this.coachData.coaches[i].firstName;
          break;
        }
      }
    }
    return this.temp;
  }
}
