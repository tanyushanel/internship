import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../../mocks/users-utils.mock';

@Component({
  selector: 'app-coach-profile-dialog',
  templateUrl: './coach-profile-dialog.component.html',
  styleUrls: ['./coach-profile-dialog.component.scss'],
})
export class CoachProfileDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
