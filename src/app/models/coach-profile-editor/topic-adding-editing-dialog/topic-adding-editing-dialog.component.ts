import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Level } from '../../../constants/data-constants';

export interface EditDialogData {
  id: string;
  level: Level;
  isEdit: true;
  question?: string;
  answers?: {
    title: string;
    isRight: boolean;
  }[];
}
interface Topic {
  question: string;
}

const emptyTopic: Topic = {
  question: '',
};

@Component({
  selector: 'app-coach-profile-editor-topic-create-dialog',
  templateUrl: './topic-adding-editing-dialog.component.html',
  styleUrls: ['./topic-adding-editing-dialog.component.scss'],
})
export class TopicAddingEditingDialogComponent {
  topic: Topic = emptyTopic;

  constructor(@Inject(MAT_DIALOG_DATA) public data: EditDialogData) {
    if (data.isEdit && data.question) {
      this.topic = {
        question: data.question,
      };
    }
  }
}
