import { Injectable } from '@angular/core';

import { AdminHttpService } from '../adminTableData.service';
import { TestData } from '../../../mocks/admin-profile-utils.mock';

@Injectable({
  providedIn: 'root',
})
export class AdminTableStoreService {
  constructor(private readonly adminHttpService: AdminHttpService) {}

  getTestData() {
    return this.adminHttpService.getAdminTests();
  }

  postTestData(test: TestData) {
    this.adminHttpService.passAdminTest(test);
  }
}
