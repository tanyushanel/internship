import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-listening-dialog',
  templateUrl: './edit-listening-dialog.component.html',
  styleUrls: ['./edit-listening-dialog.component.scss'],
})
export class EditListeningDialogComponent {
  favoriteSeason: string | undefined;

  seasons: string[] = ['a', 'b', 'c', 'd'];
}
