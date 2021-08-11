import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
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

  @Output() answersChosenId = new EventEmitter<AnswerQuestion[] | null>();

  listOfId: string[] | undefined = [];

  selectedAnswer: AnswerQuestion | null = null;

  stepperFormGroups: FormGroup[] | undefined = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.stepperFormGroups = this.questionList?.map(() =>
      this.formBuilder.group({
        stepCtrl: ['', Validators.required],
      }),
    );

    this.onFormChanges();

    // this.listOfId = this.stepperFormGroups?.map((group) => group.controls.stepCtrl.value);

    // console.log(this.stepperFormGroups);
    // console.log(this.stepperFormGroups ? this.stepperFormGroups[1].controls.stepCtrl : null);
    // console.log(this.listOfId);
  }

  onFormChanges(): void {
    this.stepperFormGroups?.forEach((formGroup) =>
      formGroup.controls.stepCtrl.valueChanges.subscribe((value) => {
        this.selectedAnswer = value;
      }),
    );
  }
}
