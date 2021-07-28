import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GrammarAnswers, Level } from '../../../../../constants/data-constants';

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

const emptyGrammar: Grammar = {
  question: '',
  answers: [
    {
      title: '',
      isRight: false,
    },
    {
      title: '',
      isRight: false,
    },
    {
      title: '',
      isRight: false,
    },
    {
      title: '',
      isRight: false,
    },
  ],
};

@Component({
  selector: 'app-coach-profile-editor-grammar-edit-dialog',
  templateUrl: './grammar-adding-editing-dialog.component.html',
  styleUrls: ['./grammar-adding-editing-dialog.component.scss'],
})
export class GrammarAddingEditingDialogComponent {
  grammar: Grammar = emptyGrammar;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateDialogData | EditDialogData) {
    if (data.isEdit) {
      this.grammar = {
        answers: data.answers,
        question: data.question,
      };
    }
  }

  questions: GrammarAnswers[] = [
    GrammarAnswers.first,
    GrammarAnswers.second,
    GrammarAnswers.third,
    GrammarAnswers.fourth,
  ];
}
