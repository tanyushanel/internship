import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Question } from '../../interfaces/question';

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
  stepperFormGroup: FormGroup;

  radioFormGroup: FormGroup;

  steps = Array.from({ length: 10 }, (_v, i) => i);

  questionList = new Array(10);

  answerCases = ['Option 1', 'Option 2', 'Option 3'];

  selectedCase = '';

  constructor(private formBuilder: FormBuilder) {
    this.stepperFormGroup = this.formBuilder.group({
      stepCtrl: ['', Validators.required],
    });
    this.radioFormGroup = new FormGroup({
      options: new FormControl(),
    });
  }

  ngOnInit() {
    // this.stepperFormGroup = this.formBuilder.group({
    //   stepCtrl: ['', Validators.required],
    // });
    // this.radioFormGroup = new FormGroup({
    //   firstName: new FormControl(),
    // });
  }
}
