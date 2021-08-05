import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Question } from '../../interfaces/question-answer';
import { TestStoreService } from '../../services/store/test-store.service';
import { TestContent } from '../../interfaces/test';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnInit {
  test$!: Observable<TestContent | null>;

  grammar$!: Observable<Question[] | undefined>;

  selectedIndex = 0;

  constructor(private testStoreService: TestStoreService) {}

  ngOnInit() {
    this.test$ = this.testStoreService.test$;
    this.grammar$ = this.test$.pipe(map((test) => test?.grammarQuestions));
  }

  setTabIndex(ind: number): void {
    this.selectedIndex = ind;
  }
}
