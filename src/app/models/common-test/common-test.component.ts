import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Question } from '../../interfaces/question-answer';
import { TopicModule } from '../../interfaces/essay-speaking';
import { TestStoreService } from '../../services/store/test-store.service';
import { TestContent, TestSubmit } from '../../interfaces/test';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnInit {
  grammarAnswers: string[] = [];

  listeningAnswers: string[] = [];

  essayText = '';

  speachRef = '';

  requestBody: Observable<TestSubmit | null> = this.testStoreService.requestBody$;

  test$: Observable<TestContent | null> = this.testStoreService.test$;

  grammar$!: Observable<Question[] | null>;

  listening$!: Observable<Question[] | null>;

  essay$!: Observable<TopicModule | null>;

  speaking$!: Observable<TopicModule | null>;

  selectedIndex = 0;

  isFinished = false;

  maxIndex = 3;

  constructor(private testStoreService: TestStoreService) {}

  ngOnInit() {
    this.testStoreService.createTestContent();
    this.testStoreService.getTestId();

    this.grammar$ = this.test$.pipe(map((test) => test?.grammarQuestions || null));
    this.listening$ = this.test$.pipe(map((test) => test?.audition.questions || null));
    this.essay$ = this.test$.pipe(map((test) => test?.essay || null));
    this.speaking$ = this.test$.pipe(map((test) => test?.speaking || null));
  }

  setTabIndex(ind: number): void {
    this.selectedIndex = ind;
  }

  onWritingSubmit(txt: string | null): void {
    if (txt) this.essayText = txt;
  }

  onGrammarSubmit(answers: string[] | null): void {
    if (answers) this.grammarAnswers = answers;
  }

  onListeningSubmit(answers: string[] | null): void {
    if (answers) this.listeningAnswers = answers;
  }

  onFinishTestClick(): void {
    this.testStoreService.testSubmit(
      this.grammarAnswers,
      this.listeningAnswers,
      this.essayText,
      this.speachRef,
    );

    this.isFinished = true;
  }
}
