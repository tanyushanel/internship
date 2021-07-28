import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  CreateDialogData,
  EditDialogData,
} from '../grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateDialogData | EditDialogData) {
    if (data.isEdit) {
      this.topic = {
        question: data.question,
      };
    }
  }
}
