import { Injectable } from '@angular/core';
import { UpdateCoachesData } from 'src/app/interfaces/admin-profile-intarfaces';

import { AdminHttpService } from '../adminTableData.service';

@Injectable({
  providedIn: 'root',
})
export class AdminTableStoreService {
  constructor(private readonly adminHttpService: AdminHttpService) {}

  getAssignedTestData() {
    return this.adminHttpService.getAssignedAdminTests();
  }

  getNotAssignedTestData() {
    return this.adminHttpService.getNotAssignedAdminTests();
  }

  getCoachData() {
    return this.adminHttpService.getAdminCoaches();
  }

  updateTestData(data: UpdateCoachesData, testID: number) {
    this.adminHttpService.updateCoachTest(data, testID).subscribe((resp) => console.log(resp));
  }
}
