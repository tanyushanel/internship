import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MOCK_TESTS } from '../../../mocks/users-utils.mock';
import { CoachTestTabs } from '../../../constants/data-constants';
import { CoachTest } from './service/get-coach-tests-http.service';
import { CoachTestsStoreService } from './service/coach-tests-store.service';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent {
  results$: Observable<CoachTest[] | null> = this.coachTestStoreService.coachTestResults$;

  tabs: CoachTestTabs[] = [
    CoachTestTabs.highPriority,
    CoachTestTabs.unchecked,
    CoachTestTabs.checked,
  ];

  tables: { [key: string]: CoachTest[] } = {};

  constructor(public dialog: MatDialog, private coachTestStoreService: CoachTestsStoreService) {
    // this.tables = {
    //   [CoachTestTabs.unchecked]: MOCK_TESTS.filter((test) => !test.isChecked),
    //   [CoachTestTabs.highPriority]: MOCK_TESTS.filter((test) => test.isHigh),
    //   [CoachTestTabs.checked]: MOCK_TESTS.filter((test) => test.isChecked),
    // };
  }
}
