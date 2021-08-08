import { Injectable } from '@angular/core';
import { TestData } from 'src/interfaces/admin.interfaces';
import { AdminHttpService } from '../adminTableData.service';

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
