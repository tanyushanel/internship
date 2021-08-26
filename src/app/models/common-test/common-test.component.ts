import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
export class CommonTestComponent implements OnInit, OnDestroy {
  test$: Observable<TestContent> = this.testStoreService.test$;

  grammarAnswers: string[] = [];

  listeningAnswers: string[] = [];

  essayText = '';

  speachRef = '';

  requestBody: Observable<SubmitTestResponse | null> = this.testStoreService.submitTestBody$;

  grammar: Question[] = [];

  listening: Question[] = [];

  essay!: TopicModule;

  speaking!: TopicModule;

  selectedIndex = 0;

  maxIndex = 3;

  isFinished = false;

  timer$ = this.testStoreService.timerValue$;

  timerSubscription!: Subscription;

  testId: string | null = '';

  constructor(
    private testStoreService: TestStoreService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const idFromRoute = this.route.snapshot.paramMap.get('id');

    if (idFromRoute) {
      this.testId = idFromRoute;
      this.testStoreService.createAssignedTestContent(this.testId);
    } else this.testStoreService.createTestContent();

    this.test$.subscribe((test) => {
      this.testId = test.id;
      this.grammar = test.grammarQuestions;
      this.listening = test.audition.questions;
      this.essay = test.essay;
      this.speaking = test.speaking;
    });

    this.timerSubscription = this.testStoreService.timer(3600, 1000, () =>
      this.onSubmitTestOnTimerRunOut(),
    );
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
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
