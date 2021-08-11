import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AnswerQuestion, Question } from '../../interfaces/question-answer';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
  ],
})
export class StepperComponent implements OnChanges {
  @Input() questionList: Question[] | null = null;

  @Output() answersChosen = new EventEmitter<AnswerQuestion[] | null>();

  answersForSubmit: AnswerQuestion[] = [];

  selectedAnswer: AnswerQuestion | null = null;

  stepperFormGroups: FormGroup[] | undefined = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.stepperFormGroups = this.questionList?.map(() =>
      this.formBuilder.group({
        stepCtrl: ['', Validators.required],
      }),
    );
  }

  onAnswerSelect(): void {}
}
