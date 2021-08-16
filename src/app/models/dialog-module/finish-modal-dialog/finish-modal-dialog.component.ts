import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FinishTestBody,
    private testStoreService: TestStoreService,
    private readonly router: Router,
    public dialogRef: MatDialogRef<FinishModalDialogComponent>,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {}

  closeClick() {
    this.dialogRef.close();
  }

  onFinishTestClick(): void {
    this.router.navigate([Route.result]);

    this.testStoreService.testSubmit(
      this.data.grammarAnswers,
      this.data.auditionAnswers,
      this.data.essayAnswer,
      this.data.speakingAnswerReference,
    );

    this.isFinished = true;

    this.dialogRef.close();
  }
}
