import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';
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
export class StepperComponent implements OnChanges, OnInit {
  @Input() questionList: Question[] | null = null;

  @Output() answersChosenId = new EventEmitter<string[] | null>();

  selectedAnswersId: string[] | null = null;

  stepperFormGroups: FormGroup[] | undefined = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.stepperFormGroups = this.questionList?.map(() =>
      this.formBuilder.group({
        stepCtrl: ['', Validators.required],
      }),
    );
    this.onChanges();
  }

  onChanges(): void {
    const observables = this.stepperFormGroups?.map((form) =>
      form.controls.stepCtrl.valueChanges.pipe(startWith('')),
    );

    if (!observables) return;

    const combined = combineLatest(observables);

    combined.subscribe((answers: AnswerQuestion[]) => {
      this.selectedAnswersId = answers.map((answer) => answer.id).filter((answ) => answ);
    });
  }

  onAnswersSubmit(): void {
    this.answersChosenId.emit(this.selectedAnswersId);
  }
}
