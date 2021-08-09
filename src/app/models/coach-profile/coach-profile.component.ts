import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CoachTestTabs } from '../../constants/data-constants';
import { CoachTestsStoreService } from './service/coach-tests-store.service';
import { CoachTest } from '../../interfaces/coach-edit';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent implements OnInit {
  tables$: Observable<CoachTest[] | null> = this.coachTestStoreService.coachTestResults$;

  tabs: CoachTestTabs[] = [
    CoachTestTabs.highPriority,
    CoachTestTabs.unchecked,
    CoachTestTabs.checked,
  ];

  constructor(public dialog: MatDialog, private coachTestStoreService: CoachTestsStoreService) {}

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.coachTestStoreService.getCoachHighPriorityTestResults();
      this.tables$ = this.coachTestStoreService.coachTestResults$;
    } else if (tabChangeEvent.index === 1) {
      this.coachTestStoreService.getCoachUncheckedTestResults();
      this.tables$ = this.coachTestStoreService.coachTestResults$;
    } else if (tabChangeEvent.index === 2) {
      this.coachTestStoreService.getCoachCheckedTestResults();
      this.tables$ = this.coachTestStoreService.coachTestResults$;
    }
  }

  ngOnInit() {
    this.tables$ = this.coachTestStoreService.coachTestResults$;
    this.coachTestStoreService.getCoachHighPriorityTestResults();
  }
}
