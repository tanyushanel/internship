import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AnswerQuestion, Question } from '../../interfaces/question-answer';
import { TopicModule } from '../../interfaces/essay-speaking';
import { TestStoreService } from '../../services/store/test-store.service';
import { TestContent, TestSubmit } from '../../interfaces/test';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnInit {
  @Input() grammar!: AnswerQuestion[] | null;

  @Input() listening!: AnswerQuestion[] | null;

  @Input() grammarAnswers: string[] = [];

  @Input() listeningAnswers: string[] = [];

  @Input() essayText = '';

  @Input() speachRef = '';

  requestBody!: TestSubmit;

  test$: Observable<TestContent | null> = this.testStoreService.test$;

  grammar$!: Observable<Question[] | null>;

  listening$!: Observable<Question[] | null>;

  essay$!: Observable<TopicModule | null>;

  speaking$!: Observable<TopicModule | null>;

  selectedIndex = 0;

  constructor(private testStoreService: TestStoreService) {}

  ngOnInit() {
    this.testStoreService.createTestContent();

    this.grammar$ = this.test$.pipe(map((test) => test?.grammarQuestions || null));
    this.listening$ = this.test$.pipe(map((test) => test?.audition.questions || null));
    this.essay$ = this.test$.pipe(map((test) => test?.essay || null));
    this.speaking$ = this.test$.pipe(map((test) => test?.speaking || null));

    this.requestBody = {
      id: '',
      grammarAnswers: this.grammarAnswers,
      auditionAnswers: this.listeningAnswers,
      essayAnswer: this.essayText,
      speakingAnswerReference: this.speachRef,
    };
  }

  setTabIndex(ind: number): void {
    this.selectedIndex = ind;
  }
}
