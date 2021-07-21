import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MOCK_TEST } from '../../../../mocks/admin-profile-utils.mock';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss'],
})
export class AdminDialogComponent implements OnInit {
  dataSource = MOCK_TEST;

  coachControl = new FormControl('', Validators.required);

  ngOnInit(): void {}
}
