import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../../../mocks/users-utils.mock';
import { GrammarQuestions, Level } from '../../../../../constants/data-constants';

@Component({
  selector: 'app-coach-profile-editor-grammar-edit-dialog',
  templateUrl: './coach-profile-editor-grammar-edit-dialog.component.html',
  styleUrls: ['./coach-profile-editor-grammar-edit-dialog.component.scss'],
})
export class CoachProfileEditorGrammarEditDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  levels: Level[] = [
    Level.Advanced,
    Level.UpperIntermediate,
    Level.Intermediate,
    Level.PreIntermediate,
    Level.Elementary,
  ];

  questions: GrammarQuestions[] = [
    GrammarQuestions.first,
    GrammarQuestions.second,
    GrammarQuestions.third,
    GrammarQuestions.fourth,
  ];
}
