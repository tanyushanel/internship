import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
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
export class StepperComponent implements OnInit, OnChanges {
  @Input() questionList!: Question[];

  @Input() selectedIndex = 0;

  stepperFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.stepperFormGroup = this.formBuilder.group({
      stepCtrl: ['', Validators.required],
      options: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  ngOnChanges() {}
}
