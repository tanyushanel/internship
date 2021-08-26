import { Injectable } from '@angular/core';
import {
  ServiceCoachData,
  TestData,
  UpdateCoachesData,
} from 'src/app/interfaces/admin-profile-intarfaces';

import { BehaviorSubject } from 'rxjs';
import { AdminHttpService } from '../adminTableData.service';

@Injectable({
  providedIn: 'root',
})
export class AdminTableStoreService {
  adminTestSubject$ = new BehaviorSubject<TestData[] | null>(null);

  temp!: TestData[];

  adminTestResults$ = this.adminTestSubject$.asObservable();

  adminCoachSubject$ = new BehaviorSubject<ServiceCoachData | null>(null);

  adminCoachResults$ = this.adminCoachSubject$.asObservable();

  constructor(private readonly adminHttpService: AdminHttpService) {}

  getAssignedTestData() {
    return this.adminHttpService
      .getAssignedAdminTests()
      .subscribe({ next: (value) => this.adminTestSubject$.next(value) });
  }

  getHighPriorityTest() {
    return this.adminHttpService.getHighPriorityAdminTests().subscribe({
      next: (value) =>
        this.adminTestSubject$.next(
          value.filter((test) => {
            return test.priority;
          }),
        ),
    });
  }

  getNotAssignedTestData() {
    return this.adminHttpService
      .getNotAssignedAdminTests()
      .subscribe({ next: (value) => this.adminTestSubject$.next(value) });
  }

  getCoachData() {
    return this.adminHttpService
      .getAdminCoaches()
      .subscribe({ next: (coaches) => this.adminCoachSubject$.next(coaches) });
  }

  updateTestData(data: UpdateCoachesData, testID: number, currentTab: string) {
    this.adminHttpService.updateCoachTest(data, testID).subscribe((resp) => {
      console.log(currentTab);
      if (currentTab === 'High Priority') {
        this.getHighPriorityTest();
      } else if (currentTab === 'Not Assigned') {
        this.getNotAssignedTestData();
      } else if (currentTab === 'Assigned') {
        this.getAssignedTestData();
      }
    });
  }
}
