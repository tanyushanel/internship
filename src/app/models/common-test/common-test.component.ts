import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestStoreService } from '../../services/store/test-store.service';
import { Test } from '../../../interfaces/test';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnInit {
  test$!: Observable<Test | null>;

  testGrammar$!: Partial<Observable<Test | null>>;

  testListening$!: Partial<Observable<Test | null>>;

  selectedIndex = 0;

  constructor(private testStoreService: TestStoreService) {}

  ngOnInit() {
    this.test$ = this.testStoreService.test$;
    // this.testGrammar$ = this.test$.pipe(map((test) => test.grammarQuestions));
  }

  setTabIndex(ind: number): void {
    this.selectedIndex = ind;
  }
}
