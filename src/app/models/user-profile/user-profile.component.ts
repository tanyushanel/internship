import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/interfaces/test';
import { Level } from 'src/constants/data-constants';
import { Route } from 'src/constants/route-constant';
import { MOCK_TEST_RESULTS } from '../../../constants/mock-test-results';
import { UserResultsService } from '../../services/user-results/user-results.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results: Test[] = [];

  levels = [...Object.values(Level)];

  selectedLevel: Level | undefined;

  constructor(private router: Router) {}

  get testsCount() {
    return this.results.length;
  }

  ngOnInit() {
    this.results = [...MOCK_TEST_RESULTS];
  }

  onStartButtonClick(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.test]);
    });
  }
}
