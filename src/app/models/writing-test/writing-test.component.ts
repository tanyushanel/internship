import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TopicModule } from '../../interfaces/essay-speaking';
import { ReportMistakeDialogComponent } from '../../components/report-mistake-dialog/report-mistake-dialog.component';

@Component({
  selector: 'app-writing-test',
  templateUrl: './writing-test.component.html',
  styleUrls: ['./writing-test.component.scss'],
})
export class WritingTestComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() essay: TopicModule | null = null;

  @Input() testId: string | null = null;

  @Output() essayWritten = new EventEmitter<string | null>();

  form!: FormGroup;

  disabled = false;

  ngOnInit() {
    this.essay = {
      id: '',
      topicName: '',
    };
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  submit() {
    const formData = this.form.value;
    this.form.disable();
    this.disabled = true;
  }

  onWritingSubmit(): void {
    this.essayWritten.emit(this.form.controls.text.value);
  }

  openReportDialog(topicId?: string) {
    this.dialog.open(ReportMistakeDialogComponent, { data: { topicId, testId: this.testId } });
  }
}
