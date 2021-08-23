import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { AdminTableStoreService } from '../../services/store/adminTableStore.service';
import { CoachTestTabs } from '../../constants/data-constants';
import { CoachTest } from '../../interfaces/coach-edit';
import { AdminTestTabs, TestData } from '../../interfaces/admin-profile-intarfaces';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  tables$: Observable<TestData[] | null> = this.admin.adminTestResults$;

  public selectedTab = AdminTestTabs.highPriority;

  tabs: AdminTestTabs[] = [
    AdminTestTabs.highPriority,
    AdminTestTabs.notAssigned,
    AdminTestTabs.assigned,
  ];

  constructor(private admin: AdminTableStoreService) {}

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.admin.getAssignedTestData();
      this.tables$ = this.admin.adminTestResults$;
      this.selectedTab = AdminTestTabs.notAssigned;
    } else if (tabChangeEvent.index === 1) {
      this.admin.getNotAssignedTestData();
      this.tables$ = this.admin.adminTestResults$;
      this.selectedTab = AdminTestTabs.assigned;
    }
  }

  ngOnInit() {
    this.admin.getAssignedTestData();
    this.tables$ = this.admin.adminTestResults$;
  }
}
