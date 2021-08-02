import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/interfaces/test';
import { Level } from 'src/constants/data-constants';
import { Route } from 'src/constants/route-constant';
import { TestStoreService } from '../../services/test/test/test-store.service';
// import { MOCK_TEST_RESULTS } from '../../../constants/mock-test-results';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results: Test[] = [];

  levels = [...Object.values(Level)];

  selectedLevel: Level | undefined;

  get testsCount() {
    return this.results.length;
  }

  constructor(private router: Router, private testStoreService: TestStoreService) {}

  ngOnInit() {
    // this.results$ = [...MOCK_TEST_RESULTS];

    this.testStoreService.getTestResults().subscribe({
      next: (results) => {
        this.results = results.filter((res) => res.testPassingDate !== null);
      },
    });
  }

  onStartButtonClick(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.test]);
    });
  }
}
