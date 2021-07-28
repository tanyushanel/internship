import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Input() questionList!: Question[];

  @Input() selectedIndex = 0;

  questions!: FormArray;

  // get questionsCount() {
  //   return this.questionList.length;
  // }

  // stepperFormGroup: FormGroup;

  // firstFormGroup: FormGroup;

  // secondFormGroup: FormGroup;

  // //////////////////////////////

  stepperForm = new FormGroup({
    questions: new FormArray([new FormControl('options')]),
  });

  // /////////////////////////

  constructor(private formBuilder: FormBuilder) {
    this.stepperForm = this.formBuilder.group({
      questions: this.formBuilder.array([
        this.formBuilder.group({
          options: [null, [Validators.required]],
        }),
      ]),
    });
    // this.stepperForm = this.formBuilder.group({
    //   stepCtrl: ['', Validators.required],
    //   // options: new FormControl('', Validators.required),
    // });
    // this.radioFormGroup = this.formBuilder.group({
    //   stepCtrl: ['', Validators.required],
    // });
    // this.firstFormGroup = this.formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
  }

  ngOnInit() {
    this.stepperForm = this.formBuilder.group({
      questions: this.formBuilder.array([
        this.formBuilder.group({
          options: [null, [Validators.required]],
        }),
      ]),
    });

    // this.firstFormGroup = this.formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
  }

  // radioFormGroup: FormGroup;
}
