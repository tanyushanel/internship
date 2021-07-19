import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/constants/data-constants';
import { results } from 'src/constants/mock-test-data';
import { Route } from 'src/constants/route-constant';
import { Test } from '../../interfaces/test';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results!: Test[];

  levels = [...Object.values(Level)];

  selectedLevel!: Level;

  constructor(private router: Router) {}

  ngOnInit() {
    this.results = results;
    this.selectedLevel = this.levels[0];
  }

  onStartButtonClick(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.grammarTest]);
    });
  }
}
