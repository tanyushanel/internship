import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../../../constants/route-constant';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  home() {
    this.router.navigate([Route.home]);
  }
}
