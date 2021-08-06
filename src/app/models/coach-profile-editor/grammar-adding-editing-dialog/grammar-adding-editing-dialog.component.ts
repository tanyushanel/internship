import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { GrammarAnswers, Level, EnglishLevel } from '../../../../constants/data-constants';
import { CoachEditStoreService } from '../coach-edit-store.service';
import { QuestionList } from '../../../interfaces/question-answer';

export interface CreateDialogData {
  id: string;
  level: Level;
  isEdit: false;
}

export interface EditDialogData extends Grammar {
  id: string;
  level: Level;
  isEdit: true;
}

interface Grammar {
  question: string;
  answers: {
    title: string;
    isRight: boolean;
  }[];
}

@Component({
  selector: 'app-coach-profile-editor-grammar-edit-dialog',
  templateUrl: './grammar-adding-editing-dialog.component.html',
  styleUrls: ['./grammar-adding-editing-dialog.component.scss'],
})
export class GrammarAddingEditingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GrammarAddingEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuestionList,
    private coachEditor: CoachEditStoreService,
  ) {}

  languageLevel = EnglishLevel;

  nameQuestion = this.data.nameQuestion;

  englishLevel: number | undefined;

  answerOption = this.data.answers;

  QuestionList = Object.values(GrammarAnswers);

  updateData(): void {
    this.coachEditor.setQuestions({
      id: this.data.id,
      nameQuestion: this.nameQuestion,
      level: this.englishLevel,
      answers: this.answerOption,
    });
    this.dialogRef.close();
  }

  changeEnglishLevel($event: Level): void {
    this.englishLevel = this.languageLevel.indexOf($event);
  }

  radioChangeHandler($event: MatRadioChange, i: number): void {
    this.answerOption = this.answerOption?.map((question) => {
      return { ...question, isRight: false };
    });
    if (this.answerOption) {
      this.answerOption[i].isRight = true;
    }
  }
}
