import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_TESTS, TestData } from '../../../mocks/users-utils.mock';
import { Tabs } from '../../../constants/data-constants';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent {
  tabs: string[] = [Tabs.unchecked, Tabs.highPriority, Tabs.checked];

  tables: { [key: string]: TestData[] } = {};

  constructor(public dialog: MatDialog) {
    this.tables = {
      [Tabs.unchecked]: MOCK_TESTS.filter((test) => !test.isChecked),
      [Tabs.highPriority]: MOCK_TESTS.filter((test) => test.isHigh),
      [Tabs.checked]: MOCK_TESTS.filter((test) => test.isChecked),
    };
  }
}
