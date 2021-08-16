import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { scan, takeWhile, tap } from 'rxjs/operators';
import { Route } from 'src/app/constants/route-constant';
import { TestStoreService } from 'src/app/services/store/test-store.service';
import { FinishTestBody } from '../../../interfaces/test';

@Component({
  selector: 'app-finish-modal-dialog',
  templateUrl: './finish-modal-dialog.component.html',
  styleUrls: ['./finish-modal-dialog.component.scss'],
})
export class FinishModalDialogComponent implements OnInit {
  @Input() isFinished = false;

  timer!: number;

  counter = 6;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FinishTestBody,
    private testStoreService: TestStoreService,
    private readonly router: Router,
    public dialogRef: MatDialogRef<FinishModalDialogComponent>,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    timer(0, 1000)
      .pipe(
        takeWhile(() => this.counter > 0),
        tap(() => (this.counter -= 1)),
      )
      .subscribe(() => {
        if (this.counter === 0) this.onTickerRunOut();
        return (this.timer = this.counter);
      });
  }

  closeClick() {
    this.dialogRef.close();
  }

  onFinishTestClick(): void {
    this.router.navigate([Route.result]);
    this.isFinished = true;
    this.testStoreService.testSubmit(
      this.data.grammarAnswers,
      this.data.auditionAnswers,
      this.data.essayAnswer,
      this.data.speakingAnswerReference,
    );

    this.dialogRef.close();
  }

  onTickerRunOut(): void {
    this.onFinishTestClick();
  }
}
