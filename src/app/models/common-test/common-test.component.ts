import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../../interfaces/question-answer';
import { TestStoreService } from '../../services/store/test-store.service';
import { TestContent } from '../../interfaces/test';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnInit {
  test$: Observable<TestContent | null | undefined> = this.testStoreService.test$;

  grammar$!: Observable<Question[] | null | undefined>;

  selectedIndex = 0;

  constructor(private testStoreService: TestStoreService) {}

  ngOnInit() {
    this.testStoreService.createTestContent();
    this.grammar$ = this.test$.pipe(map((test) => test?.grammarQuestions));
  }

  setTabIndex(ind: number): void {
    this.selectedIndex = ind;
  }
}
