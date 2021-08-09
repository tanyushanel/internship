import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Question } from '../../interfaces/question-answer';
import { Answer } from '../../constants/mock-grammar-test';

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
export class StepperComponent implements OnInit, OnChanges {
  @Input() questionList!: Question[] | null | undefined;

  @Output() answerChosen = new EventEmitter<Answer>();

  stepperFormGroups: FormGroup[] | undefined = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges() {
    this.stepperFormGroups = this.questionList?.map(() =>
      this.formBuilder.group({
        stepCtrl: ['', Validators.required],
      }),
    );
  }
}
