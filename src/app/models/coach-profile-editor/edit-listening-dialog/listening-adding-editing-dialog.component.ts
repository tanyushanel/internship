import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { languageLevel } from '../../../constants/data-constants';

@Component({
  selector: 'app-edit-listening-dialog',
  templateUrl: './listening-adding-editing-dialog.component.html',
  styleUrls: ['./listening-adding-editing-dialog.component.scss'],
})
export class ListeningAddingEditingDialogComponent {
  favoriteSeason: string | undefined;

  seasons: string[] = ['a', 'b', 'c', 'd'];

  languageLevel = languageLevel;

  Array = new Array(10);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ListeningAddingEditingDialogComponent>,
  ) {}

  levelChangeHandler($event: any) {}
}
