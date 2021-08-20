import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import {
  ServiceCoachData,
  TestData,
  UpdateCoachesData,
} from '../../../../interfaces/admin-profile-intarfaces';

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

  coaches!: ServiceCoachData;

  coachUpdate: UpdateCoachesData | undefined;

  temp: string | null | undefined;

  assignedData!: TestData[];

  notAssignedData!: TestData[];

  priorityData!: TestData[];

  displaedColums = ['Position', 'Level', 'Date', 'Button'];

  displaedColumshasCoach = ['Position', 'Level', 'Date', 'Coach', 'Button'];

  constructor(public dialog: MatDialog, private service: AdminTableStoreService) {}

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.service.getAssignedTestData().subscribe((assignedData) => {
      this.assignedData = assignedData.results;
    });
    this.service.getNotAssignedTestData().subscribe((notAssignedData) => {
      this.notAssignedData = notAssignedData.results;
      this.priorityData = this.notAssignedData.filter((test) => test.priority);
    });

    this.service.getCoachData().subscribe((data) => {
      this.coaches = data;
    });
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
