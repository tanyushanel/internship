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
import { CoachTest } from '../../../interfaces/coach-edit';

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

  @Input() tableData: TestData[] = [];

  AssignSelector = true;

  coaches!: ServiceCoachData;

  coachUpdate: UpdateCoachesData | undefined;

  temp: string | null | undefined;

  dataSource: MatTableDataSource<TestData>;

  displaedColumshasCoach = ['Position', 'Level', 'Date', 'Coach', 'Button'];

  constructor(public dialog: MatDialog, private service: AdminTableStoreService) {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    console.log(this.tableData);
  }

  openDialog(element: TestData, CoachData: ServiceCoachData) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: {
        id: element.id,
        coach: element.coach,
        coaches: CoachData.coaches,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.coachUpdate = {
        testId: result.id,
        coachId: result.coach.userId,
      };
      this.service.updateTestData(this.coachUpdate, result.id);
    });
  }

  coachName(Id: string) {
    for (let i = 0; i < this.coaches.coaches.length; i += 1) {
      if (Id === this.coaches.coaches[i].userId) {
        this.temp = this.coaches.coaches[i].firstName;
        break;
      }
    }
    return this.temp;
  }
}
