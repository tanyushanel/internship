import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TopicModule } from '../../interfaces/essay-speaking';

@Component({
  selector: 'app-writing-test',
  templateUrl: './writing-test.component.html',
  styleUrls: ['./writing-test.component.scss'],
})
export class WritingTestComponent implements OnInit {
  @Input() essay: TopicModule | null = null;

  @Output() essayWritten = new EventEmitter<string>();

  essayText = '';

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

  clear() {
    this.form.reset();
  }

  nextTest() {}

  onWritingSubmit(): void {
    this.essayWritten.emit();
  }
}
