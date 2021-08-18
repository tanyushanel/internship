import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TopicModule } from '../../interfaces/essay-speaking';
import { Question } from '../../interfaces/question-answer';
import { SubmitTestResponse, TestContent } from '../../interfaces/test';
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

  requestBody: Observable<SubmitTestResponse | null> = this.testStoreService.submitTestBody$;

  test$: Observable<TestContent | null> = this.testStoreService.test$;

  grammar$!: Observable<Question[] | null>;

  listening$!: Observable<Question[] | null>;

  essay$!: Observable<TopicModule | null>;

  speaking$!: Observable<TopicModule | null>;

  selectedIndex = 0;

  maxIndex = 3;

  isFinished = false;

  timer$ = this.testStoreService.timerValue$;

  timerSubscription!: Subscription;

  testId: string | undefined = '';

  constructor(
    private testStoreService: TestStoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.testStoreService.createTestContent();
    this.testStoreService.getTestId();

    this.test$.pipe(map((test) => test?.id)).subscribe((id) => (this.testId = id));
    this.grammar$ = this.test$.pipe(map((test) => test?.grammarQuestions || null));
    this.listening$ = this.test$.pipe(map((test) => test?.audition.questions || null));
    this.essay$ = this.test$.pipe(map((test) => test?.essay || null));
    this.speaking$ = this.test$.pipe(map((test) => test?.speaking || null));

    if (this.testId) {
      this.testStoreService.createAssignedTestContent(this.testId);
    } else this.testStoreService.createTestContent();

    this.timerSubscription = this.testStoreService.timer(60, 60000, () =>
      this.onSubmitTestOnTimerRunOut(),
    );
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

  onFinishButtonOpenDialog(): void {
    this.dialog.closeAll();
    this.dialog.open(FinishModalDialogComponent, {
      width: '45rem',
      data: {
        id: this.testId,
        grammarAnswers: this.grammarAnswers,
        auditionAnswers: this.listeningAnswers,
        essayAnswer: this.essayText,
        speakingAnswerReference: this.speachRef,
        isFinished: this.isFinished,
        timerSubscription: this.timerSubscription,
      },
    });
  }

  onSubmitTestOnTimerRunOut(): void {
    this.dialog.closeAll();
    if (this.timerSubscription) this.timerSubscription.unsubscribe();

    this.isFinished = true;

    this.dialog.open(FinishModalDialogComponent, {
      closeOnNavigation: false,
      width: '45rem',
      data: {
        id: this.testId,
        grammarAnswers: this.grammarAnswers,
        auditionAnswers: this.listeningAnswers,
        essayAnswer: this.essayText,
        speakingAnswerReference: this.speachRef,
        isFinished: this.isFinished,
        timerSubscription: this.timerSubscription,
      },
    });
  }
}
