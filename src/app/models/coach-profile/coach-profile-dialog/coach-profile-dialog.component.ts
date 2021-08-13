import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoachTest } from '../../../interfaces/coach-edit';
import { CoachTestsStoreService } from '../service/coach-tests-store.service';

@Component({
  selector: 'app-coach-profile-dialog',
  templateUrl: './coach-profile-dialog.component.html',
  styleUrls: ['./coach-profile-dialog.component.scss'],
})
export class CoachProfileDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CoachTest,
    public dialogRef: MatDialogRef<CoachProfileDialogComponent>,
    private coachCheck: CoachTestsStoreService,
  ) {}

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      comment: new FormControl(''),
      speakingMark: new FormControl(null, [Validators.pattern('^[0-9]$|[1][0]$')]),
      essayMark: new FormControl(null, [Validators.pattern('^[0-9]$|[1][0]$')]),
    });
  }

  submitTest(): void {
    const formData = { ...this.form.value };
    const question = {
      essayMark: formData.essayMark,
      speakingMark: formData.speakingMark,
      comment: formData.comment,
    };
    const id = {
      id: this.data.id,
    };
    if (this.form.valid) {
      this.dialogRef.close();
      this.coachCheck.sendCheckTest(question, id);
    }
  }
}
