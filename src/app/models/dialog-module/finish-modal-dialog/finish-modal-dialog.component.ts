import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Route } from 'src/app/constants/route-constant';
import { TestStoreService } from 'src/app/services/store/test-store.service';
import { FinishTestBody } from '../../../interfaces/test';
import { CoachAudioDataStoreService } from '../../../services/store/coach-audio-data-store.service';

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

  audioFilePath = this.data.speakingAnswerReference;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FinishTestBody,
    private testStoreService: TestStoreService,
    private readonly router: Router,
    public readonly dialogRef: MatDialogRef<FinishModalDialogComponent>,
    private readonly audioData: CoachAudioDataStoreService,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.audioData.audioFilePath$.subscribe((path) => {
      this.audioFilePath = path.pathfile;
    });
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
    this.testStoreService.testSubmit(
      this.data.id,
      this.data.grammarAnswers,
      this.data.auditionAnswers,
      this.data.essayAnswer,
      this.audioFilePath,
    );

    this.dialogRef.close();

    this.router.navigate([Route.result]);
  }

  onTickerRunOut(): void {
    this.onCompleteTestClick();
  }
}
