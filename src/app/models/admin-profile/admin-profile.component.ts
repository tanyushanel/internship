import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { AdminTableStoreService } from 'src/app/services/store/adminTableStore.service';

import { AdminTestTabs, ServiceTestData, TestData } from 'src/mocks/admin-profile-utils.mock';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  ngOnInit(): void {}
}
