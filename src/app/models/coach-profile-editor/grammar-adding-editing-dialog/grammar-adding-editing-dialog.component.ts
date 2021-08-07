import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { languageLevel, GrammarAnswers, Level } from '../../../constants/data-constants';
import { CoachQuestionStoreService } from '../../../services/store/coach-question-store.service';
import { Question } from '../../../interfaces/question-answer';

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
    @Inject(MAT_DIALOG_DATA) public data: Question,
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
      level: this.englishLevel,
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
    const level = Object.keys(this.languageLevel).find((key) => this.languageLevel[key] === $event);
    this.englishLevel = Number(level);
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
