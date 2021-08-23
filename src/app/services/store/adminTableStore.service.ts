import { Injectable } from '@angular/core';
import {
  CoachData,
  ServiceCoachData,
  ServiceTestData,
  TestData,
  UpdateCoachesData,
} from 'src/app/interfaces/admin-profile-intarfaces';

import { BehaviorSubject } from 'rxjs';
import { AdminHttpService } from '../adminTableData.service';
import { CoachTest } from '../../interfaces/coach-edit';

@Injectable({
  providedIn: 'root',
})
export class AdminTableStoreService {
  adminTestSubject$ = new BehaviorSubject<TestData[] | null>(null);

  adminTestResults$ = this.adminTestSubject$.asObservable();

  adminCoachSubject$ = new BehaviorSubject<ServiceCoachData | null>(null);

  adminCoachResults$ = this.adminCoachSubject$.asObservable();

  constructor(private readonly adminHttpService: AdminHttpService) {}

  getAssignedTestData() {
    return this.adminHttpService
      .getAssignedAdminTests()
      .subscribe({ next: (value) => this.adminTestSubject$.next(value) });
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

  updateTestData(data: UpdateCoachesData, testID: number) {
    this.adminHttpService.updateCoachTest(data, testID).subscribe((resp) => console.log(resp));
  }
}
