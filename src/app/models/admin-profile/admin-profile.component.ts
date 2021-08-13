import { Component, OnInit } from '@angular/core';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';
import { ServiceComponent } from 'src/mocks/admin-mock.service';
import { AdminTestTabs, ServiceTestData, TestData } from 'src/mocks/admin-profile-utils.mock';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  tabs: AdminTestTabs[] = [AdminTestTabs.notAssigned, AdminTestTabs.assigned];

  adminTable: { [key: string]: TestData[] } = {};

  AdminTestData!: ServiceTestData;

  adminDisplayListMap: { [key: string]: string[] } = {};

  data: ServiceTestData | undefined;

  ngOnInit(): void {}

  constructor(private service: AdminTableStoreService) {
    this.service.getAssignedTestData().subscribe((data) => {
      console.log(data.results);
      this.adminTable = {
        [AdminTestTabs.assigned]: data.results,
      };
    });
    this.service.getNotAssignedTestData().subscribe((Data) => {
      console.log(Data.results);
      this.adminTable = {
        [AdminTestTabs.notAssigned]: Data.results,
      };
      this.adminDisplayListMap = {
        [AdminTestTabs.notAssigned]: ['Position', 'Level', 'Date', 'Button'],
        [AdminTestTabs.assigned]: ['Position', 'Level', 'Date', 'Coach', 'Button'],
      };
    });
  }
}
