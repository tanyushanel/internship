import { Injectable } from '@angular/core';
import { TestData } from 'src/mocks/admin-profile-utils.mock';
import { AdminHttpService } from '../adminTableData.service';

@Injectable({
  providedIn: 'root',
})
export class AdminTableStoreService {
  constructor(private readonly adminHttpService: AdminHttpService) {}

  getTestData() {
    return this.adminHttpService.getAdminTests();
  }

  getCoachData() {
    return this.adminHttpService.getAdminCoaches();
  }

  updateTestData(data: TestData, testID: number) {
    this.adminHttpService.updateCoachTest(data, testID);
  }
}
