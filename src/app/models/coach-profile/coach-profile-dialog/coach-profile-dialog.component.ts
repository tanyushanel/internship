import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoachTest } from '../../../interfaces/coach-edit';
import { CoachTestsStoreService } from '../service/coach-tests-store.service';

@Component({
  selector: 'app-coach-profile-dialog',
  templateUrl: './coach-profile-dialog.component.html',
  styleUrls: ['./coach-profile-dialog.component.scss'],
})
export class CoachProfileDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CoachTest,
    public dialogRef: MatDialogRef<CoachProfileDialogComponent>,
    private coachCheck: CoachTestsStoreService,
  ) {}

  submitTest(): void {
    const question = {
      essayMark: this.data.essayMark,
      speakingMark: this.data.speakingMark,
      comment: this.data.comment,
    };
    const id = {
      id: this.data.id,
    };
    this.dialogRef.close();
    this.coachCheck.sendCheckTest(question, id);
  }
}
