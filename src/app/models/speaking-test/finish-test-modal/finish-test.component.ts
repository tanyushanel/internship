import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/constants/route-constant';

@Component({
  selector: 'app-finish-test',
  templateUrl: './finish-test.component.html',
  styleUrls: ['./finish-test.component.scss'],
})
export class FinishTestComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  home() {
    this.router.navigate([Route.test]);
  }

  finishTest() {
    this.router.navigate([Route.result]);
  }
}
