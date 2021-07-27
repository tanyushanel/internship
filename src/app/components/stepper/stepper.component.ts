import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Question } from '../../interfaces/question-answer';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class StepperComponent implements OnInit {
  @Input() steps!: number;

  stepperFormGroup: FormGroup;

  stepArray: number[] | undefined;

  questionList = new Array(10);

  answerCases = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private formBuilder: FormBuilder) {
    this.stepperFormGroup = this.formBuilder.group({
      stepCtrl: ['', Validators.required],
      options: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.stepArray = Array.from({ length: this.steps }, (_v, i) => i);
  }
}
