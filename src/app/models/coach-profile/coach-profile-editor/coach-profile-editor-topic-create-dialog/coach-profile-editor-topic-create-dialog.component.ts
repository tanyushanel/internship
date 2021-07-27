import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../../../mocks/users-utils.mock';
import { Level } from '../../../../../constants/data-constants';

@Component({
  selector: 'app-coach-profile-editor-topic-create-dialog',
  templateUrl: './coach-profile-editor-topic-create-dialog.component.html',
  styleUrls: ['./coach-profile-editor-topic-create-dialog.component.scss'],
})
export class CoachProfileEditorTopicCreateDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  levels: Level[] = [
    Level.Advanced,
    Level.UpperIntermediate,
    Level.Intermediate,
    Level.PreIntermediate,
    Level.Elementary,
  ];
}
