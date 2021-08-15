import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Route } from 'src/app/constants/route-constant';

@Component({
  selector: 'app-finish-test',
  templateUrl: './finish-test.component.html',
  styleUrls: ['./finish-test.component.scss'],
})
export class FinishTestComponent implements OnInit {
  dialog: any;

  constructor(
    private readonly router: Router,
    public dialogRef: MatDialogRef<FinishTestComponent>,
  ) {}

  ngOnInit(): void {}

  finishTest() {
    this.router.navigate([Route.result]);
    this.dialogRef.close();
  }

  closeClick() {
    this.dialogRef.close();
  }
}
