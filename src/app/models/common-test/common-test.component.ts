import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestStoreService } from '../../services/test/test/test-store.service';

import { Test } from '../../interfaces/test';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnInit {
  test$!: Observable<Test | null>;

  selectedIndex = 0;

  constructor(private testStoreService: TestStoreService) {}

  ngOnInit() {
    // this.test$ = this.testStoreService.test$;
  }

  setTabIndex(ind: number): void {
    this.selectedIndex = ind;
  }
}
