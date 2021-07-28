import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-listening-dialog',
  templateUrl: './add-listening-dialog.component.html',
  styleUrls: ['./add-listening-dialog.component.scss'],
})
export class AddListeningDialogComponent {
  favoriteSeason: string | undefined;

  seasons: string[] = ['a', 'b', 'c', 'd'];
}
