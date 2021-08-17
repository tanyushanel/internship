import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Route } from 'src/app/constants/route-constant';
import { TestStoreService } from 'src/app/services/store/test-store.service';
import { FinishTestBody } from '../../../interfaces/test';

@Component({
  selector: 'app-finish-modal-dialog',
  templateUrl: './finish-modal-dialog.component.html',
  styleUrls: ['./finish-modal-dialog.component.scss'],
})
export class FinishModalDialogComponent implements OnInit {
  isFinished = this.data.isFinished;

  testTimerSubscription = this.data.timerSubscription;

  buttonTimerSubscription!: Subscription;

  timer$ = this.testStoreService.timerValue$;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FinishTestBody,
    private testStoreService: TestStoreService,
    private readonly router: Router,
    public dialogRef: MatDialogRef<FinishModalDialogComponent>,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    if (this.isFinished)
      this.buttonTimerSubscription = this.testStoreService.timer(6, 1000, () =>
        this.onTickerRunOut(),
      );
  }

  closeClick() {
    this.dialogRef.close();
  }

  onCompleteTestClick(): void {
    this.testTimerSubscription.unsubscribe();
    if (this.buttonTimerSubscription) this.buttonTimerSubscription.unsubscribe();

    this.dialogRef.close();

    this.router.navigate([Route.result]);

    this.testStoreService.testSubmit(
      this.data.grammarAnswers,
      this.data.auditionAnswers,
      this.data.essayAnswer,
      this.data.speakingAnswerReference,
    );
  }

  onTickerRunOut(): void {
    this.onCompleteTestClick();
  }
}
