import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import {
  AdminTestTabs,
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

  @Input() displayedColumns!: string[];

  @Input() selectedTab!: AdminTestTabs;

  constructor(
    private dialog: MatDialog,
    private service: AdminTableStoreService,
    private rerender: ChangeDetectorRef,
  ) {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    console.log(this.selectedTab);
  }

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
        setTimeout(() => {
          this.rerender.detectChanges();
          this.table.renderRows();
        }, 3000);
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
