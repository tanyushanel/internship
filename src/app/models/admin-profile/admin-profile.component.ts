import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { AdminTableStoreService } from '../../services/store/adminTableStore.service';
import {
  AdminTestTabs,
  ServiceCoachData,
  TestData,
} from '../../interfaces/admin-profile-intarfaces';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  tables$: Observable<TestData[] | null> = this.admin.adminTestResults$;

  coaches$: Observable<ServiceCoachData | null> = this.admin.adminCoachResults$;

  public selectedTab = AdminTestTabs.assigned;

  displayedColumns = ['testNumber', 'Level', 'Date', 'Coach', 'Button'];

  tabs: AdminTestTabs[] = [
    AdminTestTabs.highPriority,
    AdminTestTabs.notAssigned,
    AdminTestTabs.assigned,
  ];

  constructor(private admin: AdminTableStoreService) {}

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 2) {
      this.admin.getAssignedTestData();
      this.tables$ = this.admin.adminTestResults$;
      this.selectedTab = AdminTestTabs.notAssigned;
      this.displayedColumns = ['testNumber', 'Level', 'Date', 'Coach', 'Button'];
    } else if (tabChangeEvent.index === 1) {
      this.admin.getNotAssignedTestData();
      this.tables$ = this.admin.adminTestResults$;
      this.selectedTab = AdminTestTabs.assigned;
      this.displayedColumns = ['testNumber', 'Level', 'Date', 'Button'];
    } else if (tabChangeEvent.index === 0) {
      this.admin.getAssignedTestData();
      this.tables$ = this.admin.adminTestResults$;
      this.selectedTab = AdminTestTabs.assigned;
      this.displayedColumns = ['testNumber', 'Level', 'Date', 'Coach', 'Button'];
    }
  }

  ngOnInit() {
    this.admin.getAssignedTestData();
    this.tables$ = this.admin.adminTestResults$;
    this.admin.getCoachData();
    this.coaches$ = this.admin.adminCoachResults$;
  }
}
