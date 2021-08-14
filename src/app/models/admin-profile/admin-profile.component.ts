import { Component, OnInit } from '@angular/core';
import { AdminTestTabs, TestData } from 'src/mocks/admin-profile-utils.mock';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  tabs: AdminTestTabs[] = [AdminTestTabs.notAssigned, AdminTestTabs.assigned];

  adminTable: { [key: string]: TestData[] } = {};

  adminDisplayListMap: { [key: string]: string[] } = {};

  ngOnInit(): void {}

  constructor(private service: ServiceComponent) {
    this.service.getData().subscribe((data) => {
      this.adminTable = {
        [AdminTestTabs.notAssigned]: data.filter((test) => !test.isAssign),
        [AdminTestTabs.assigned]: data.filter((test) => test.isAssign),
      };
      this.adminDisplayListMap = {
        [AdminTestTabs.notAssigned]: ['Position', 'Level', 'Date', 'Button'],
        [AdminTestTabs.assigned]: ['Position', 'Level', 'Date', 'Coach', 'Button'],
      };
    });
  }
}
