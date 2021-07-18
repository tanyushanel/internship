import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface CoachList {
  name: string;
  level: string;
}

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss'],
})
export class AdminDialogComponent implements OnInit {
  coachList: CoachList[] = [
    {
      name: 'Nick',
      level: 'mid',
    },
    {
      name: 'Nick1',
      level: 'mid1',
    },
    {
      name: 'Nick2',
      level: 'mid2',
    },
    {
      name: 'Nick3',
      level: 'mid3',
    },
    {
      name: 'Nick4',
      level: 'mid4',
    },
    {
      name: 'Nick',
      level: 'mid',
    },
  ];

  coachControl = new FormControl('', Validators.required);

  ngOnInit(): void {}
}
