import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TopicModule } from '../../interfaces/essay-speaking';
import { Question } from '../../interfaces/question-answer';
import { TestContent, TestSubmit } from '../../interfaces/test';
import { TestStoreService } from '../../services/store/test-store.service';
import { FinishModalDialogComponent } from '../dialog-module/finish-modal-dialog/finish-modal-dialog.component';

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

  requestBody: Observable<TestSubmit | null> = this.testStoreService.submitTestBody$;

  test$: Observable<TestContent | null> = this.testStoreService.test$;

  grammar$!: Observable<Question[] | null>;

  listening$!: Observable<Question[] | null>;

  essay$!: Observable<TopicModule | null>;

  speaking$!: Observable<TopicModule | null>;

  selectedIndex = 0;

  maxIndex = 3;

  constructor(
    private testStoreService: TestStoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.testStoreService.createTestContent();
    this.testStoreService.getTestId();

    const testId = this.route.snapshot.paramMap.get('id');

    if (testId) {
      this.testStoreService.createAssignedTestContent(testId);
    } else this.testStoreService.createTestContent();

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

  onFinishButtonClick(): void {
    this.dialog.open(FinishModalDialogComponent, {
      width: '45rem',
      data: {
        grammarAnswers: this.grammarAnswers,
        auditionAnswers: this.listeningAnswers,
        essayAnswer: this.essayText,
        speakingAnswerReference: this.speachRef,
      },
    });
  }
}
