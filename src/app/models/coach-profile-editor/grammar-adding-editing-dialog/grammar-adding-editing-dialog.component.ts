import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { languageLevel, GrammarAnswers, Level } from '../../../constants/data-constants';
import { CoachQuestionStoreService } from '../../../services/store/coach-question-store.service';
import { CoachQuestion } from '../../../interfaces/question-answer';
import { englishLevelNumber } from '../../../helpers/checks';
import { MistakeReport } from '../../../interfaces/mistake-report';

@Component({
  selector: 'app-coach-profile-editor-grammar-edit-dialog',
  templateUrl: './grammar-adding-editing-dialog.component.html',
  styleUrls: ['./grammar-adding-editing-dialog.component.scss'],
})
export class GrammarAddingEditingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GrammarAddingEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CoachQuestion,
    @Inject(MAT_DIALOG_DATA) public report: MistakeReport,
    private coachEditor: CoachQuestionStoreService,
  ) {}

  languageLevel = languageLevel;

  nameQuestion = this.data.nameQuestion;

  englishLevel: number | undefined;

  answerOption = this.data.answers;

  QuestionList = Object.values(GrammarAnswers);

  updateData(): void {
    const question = {
      id: this.data.id,
      nameQuestion: this.nameQuestion,
      level: this.englishLevel ?? this.data.level,
      answers: this.answerOption,
    };
    if (this.data.isEdit) {
      this.coachEditor.updateQuestion(question);
    } else {
      this.coachEditor.createQuestion(question);
    }
    this.dialogRef.close();
  }

  levelChangeHandler($event: Level): void {
    this.englishLevel = englishLevelNumber($event);
  }

  radioChangeHandler(i: number): void {
    this.answerOption = this.answerOption?.map((question) => {
      return { ...question, isRight: false };
    });
    if (this.answerOption) {
      this.answerOption[i].isRight = true;
    }
  }
}
