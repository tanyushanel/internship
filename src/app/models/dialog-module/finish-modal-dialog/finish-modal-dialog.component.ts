import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestStoreService } from 'src/app/services/store/test-store.service';
import { FinishTestBody } from '../../../interfaces/test';

@Component({
  selector: 'app-finish-modal-dialog',
  templateUrl: './finish-modal-dialog.component.html',
  styleUrls: ['./finish-modal-dialog.component.scss'],
})
export class FinishModalDialogComponent implements OnInit {
  isFinished = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FinishTestBody,
    private testStoreService: TestStoreService,
  ) {}

  ngOnInit(): void {}

  onFinishTestClick(): void {
    this.testStoreService.testSubmit(
      this.data.grammarAnswers,
      this.data.auditionAnswers,
      this.data.essayAnswer,
      this.data.speakingAnswerReference,
    );

    this.isFinished = true;
  }
}
