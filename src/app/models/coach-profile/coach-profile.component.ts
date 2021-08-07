import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MOCK_TESTS } from '../../../mocks/users-utils.mock';
import { CoachTestTabs } from '../../../constants/data-constants';
import { CoachTest } from './service/get-coach-tests-http.service';
import { CoachTestsStoreService } from './service/coach-tests-store.service';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent implements OnInit {
  results$: Observable<CoachTest[] | null> = this.coachTestStoreService.coachTestResults$;

  tabs: CoachTestTabs[] = [
    CoachTestTabs.highPriority,
    CoachTestTabs.unchecked,
    CoachTestTabs.checked,
  ];

  tables: { [key: string]: CoachTest[] } = {};

  constructor(public dialog: MatDialog, private coachTestStoreService: CoachTestsStoreService) {
    this.tables = {
      [CoachTestTabs.unchecked]: MOCK_TESTS.filter((test) => !test.isChecked),
      [CoachTestTabs.highPriority]: MOCK_TESTS.filter((test) => test.isHigh),
      [CoachTestTabs.checked]: MOCK_TESTS.filter((test) => test.isChecked),
    };
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.coachTestStoreService.getCoachHighPriorityTestResults();
      this.results$ = of(MOCK_TESTS.filter((test) => test.isHigh));
    } else if (tabChangeEvent.index === 1) {
      this.coachTestStoreService.getCoachUncheckedTestResults();
      this.results$ = of(MOCK_TESTS.filter((test) => !test.isChecked));
    } else if (tabChangeEvent.index === 2) {
      this.coachTestStoreService.getCoachCheckedTestResults();
      this.results$ = of(MOCK_TESTS.filter((test) => test.isChecked));
    }
  }

  ngOnInit() {
    this.coachTestStoreService.getCoachHighPriorityTestResults();
    this.results$ = of(MOCK_TESTS.filter((test) => test.isHigh));
  }
}
