import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { GrammarAnswers, Level } from '../../../../constants/data-constants';
import { QuestionList } from '../../../services/coach-edit-http.service';
import { CoachEditStoreService } from '../coach-edit-store.service';

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
    @Inject(MAT_DIALOG_DATA) public data: QuestionList,
    private coachEditor: CoachEditStoreService,
  ) {}

  nameQuestion = this.data.nameQuestion;

  englishLevel: Level | undefined;

  answerOption = this.data.answers;

  QuestionList = Object.values(GrammarAnswers);

  updateData() {
    this.coachEditor.setQuestions({
      id: this.data.id,
      nameQuestion: this.nameQuestion,
      level: this.englishLevel,
      answers: { ...this.answerOption },
    });
  }

  changeEnglishLevel($event: Level) {
    this.englishLevel = $event;
  }

  radioChangeHandler($event: MatRadioChange, i: number): void {
    console.table(this.answerOption);
    this.answerOption = this.answerOption?.map((question) => {
      return { ...question, isRight: false };
    });
    if (this.answerOption) {
      this.answerOption[i].isRight = true;
    }
  }

  setAnswerTitle($event: Event, i: number) {
    // @ts-ignore
    this.answerOption[i]?.title = $event;
  }
}
