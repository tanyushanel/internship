import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import {
  AdminTestTabs,
  PeriodicElement,
  ServiceCoachData,
  TestData,
  UpdateCoachesData,
} from '../../../interfaces/admin-profile-intarfaces';
import { languageLevel } from '../../../constants/data-constants';
import { CoachTest } from '../../../interfaces/coach-edit';
import { isSubstring } from '../../../helpers/filter-check';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnInit, OnChanges {
  @ViewChild(MatTable) table!: MatTable<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @Input() tableData!: TestData[];

  @Input() coachData!: ServiceCoachData | null;

  @Input() displayedColumns!: string[];

  @Input() selectedTab!: AdminTestTabs;

  dataSource: MatTableDataSource<TestData>;

  languageLevel = languageLevel;

  idFilter = new FormControl('');

  levelFilter = new FormControl('');

  dateFilter = new FormControl('');

  filterValues = {
    testNumber: '',
    level: '',
    testPassingDate: '',
  };

  AssignSelector = true;

  sortedData: TestData[];

  coachUpdate: UpdateCoachesData | undefined;

  temp: string | null | undefined;

  constructor(private dialog: MatDialog, private service: AdminTableStoreService) {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.sortedData = this.dataSource.data;
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataSource.data = this.tableData;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.idFilter.valueChanges.subscribe((testNumber) => {
      this.filterValues.testNumber = testNumber;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.levelFilter.valueChanges.subscribe((level) => {
      this.filterValues.level = level;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.dateFilter.valueChanges.subscribe((testPassingDate) => {
      this.filterValues.testPassingDate = testPassingDate;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
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
    this.temp = null;
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

  createFilter(): (filterValues: TestData, filter: string) => boolean {
    return function filterFunction(filterValues, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        isSubstring(filterValues.testNumber, searchTerms.testNumber) &&
        isSubstring(languageLevel[filterValues.level], searchTerms.level) &&
        isSubstring(filterValues.testPassingDate, searchTerms.testPassingDate)
      );
    };
  }
}
