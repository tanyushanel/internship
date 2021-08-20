import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoachTest } from '../../interfaces/coach-edit';

@Component({
  selector: 'app-report-submit-modal',
  templateUrl: './report-submit-modal.component.html',
  styleUrls: ['./report-submit-modal.component.scss'],
})
export class ReportSubmitModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CoachTest,
    public dialogRef: MatDialogRef<ReportSubmitModalComponent>,
  ) {}

  ngOnInit(): void {}
}
