import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TestData, UpdateCoachesData } from 'src/mocks/admin-profile-utils.mock';
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
    console.log(data);
    this.adminHttpService.updateCoachTest(data, testID).subscribe((resp) => console.log(resp));
  }
}
