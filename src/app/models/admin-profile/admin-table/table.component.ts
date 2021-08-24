import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import {
  AdminTestTabs,
  PeriodicElement,
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
export class TableComponent {
  @ViewChild(MatTable) table!: MatTable<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @Input() tableData!: TestData[];

  @Input() coachData!: ServiceCoachData | null;

  @Input() displayedColumns!: string[];

  @Input() selectedTab!: AdminTestTabs;

  dataSource: MatTableDataSource<TestData>;

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

  constructor(private dialog: MatDialog, private service: AdminTableStoreService) {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngOnChanges() {
    this.dataSource.data = this.tableData;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
        this.dataSource.data = this.tableData;
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
