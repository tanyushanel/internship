import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReportSubmitModalComponent } from '../report-submit-modal/report-submit-modal.component';
import { MistakeReport } from '../../interfaces/mistake-report';
import { MistakeReportStoreService } from '../../services/store/mistake-report-store.service';

@Component({
  selector: 'app-report-mistake-modal',
  templateUrl: './report-mistake-dialog.component.html',
  styleUrls: ['./report-mistake-dialog.component.scss'],
})
export class ReportMistakeDialogComponent {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: MistakeReport,
    public dialogRef: MatDialogRef<ReportMistakeDialogComponent>,
    private sendReport: MistakeReportStoreService,
  ) {}

  description = '';

  submitMistake() {
    const reportGrammar = {
      questionId: this.data.questionId,
      description: this.description,
      testId: this.data.testId,
    };
    const reportListening = {
      questionId: this.data.questionId,
      auditionId: this.data.auditionId,
      description: this.description,
      testId: this.data.testId,
    };
    const reportWritingOrSpeaking = {
      speakingId: this.data.topicId,
      description: this.description,
      testId: this.data.testId,
    };
    if (this.data.questionId && this.data.auditionId) {
      this.sendReport.createMistakeReport(reportListening);
    } else if (this.data.questionId && !this.data.auditionId) {
      this.sendReport.createMistakeReport(reportGrammar);
    } else if (this.data.topicId) {
      this.sendReport.createMistakeReport(reportWritingOrSpeaking);
    }

    this.dialogRef.close();
    this.dialog.open(ReportSubmitModalComponent);
  }
}
