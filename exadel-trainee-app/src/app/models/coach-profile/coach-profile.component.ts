import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MOCK_TESTS, TestData } from '../../../mocks/users-utils.mock';
import { CoachTestTabs } from '../../../constants/data-constants';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent {
  tabs: CoachTestTabs[] = [
    CoachTestTabs.unchecked,
    CoachTestTabs.highPriority,
    CoachTestTabs.checked,
  ];

  tables: { [key: string]: TestData[] } = {};

  constructor(public dialog: MatDialog) {
    this.tables = {
      [CoachTestTabs.unchecked]: MOCK_TESTS.filter((test) => !test.isChecked),
      [CoachTestTabs.highPriority]: MOCK_TESTS.filter((test) => test.isHigh),
      [CoachTestTabs.checked]: MOCK_TESTS.filter((test) => test.isChecked),
    };
  }
}
