import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestResult } from 'src/app/interfaces/result';
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
  // RESULTS: TestResult[] = [];

  MOCK_TEST_RESULTS: TestResult[] = [];

  levels = [...Object.values(Level)];

  selectedLevel: Level | undefined;

  length = MOCK_TEST_RESULTS.length;

  constructor(private router: Router, private userResultsService: UserResultsService) {}

  ngOnInit() {
    this.MOCK_TEST_RESULTS = MOCK_TEST_RESULTS;
    // this.RESULTS = this.userResultsService.getTestResults();
  }

  onStartButtonClick(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.test]);
    });
  }
}
