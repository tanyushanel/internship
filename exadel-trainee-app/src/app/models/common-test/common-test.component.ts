import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/constants/route-constant';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  nextTest(): void {
    // if (this.router.url === `/${Route.grammarTest}`) {
    //   this.router.navigate([Route.listening]);
    // } else {
    //   this.router.navigate([Route.writing]);
    // }
  }
}
