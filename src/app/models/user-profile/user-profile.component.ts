import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/interfaces/test';
import { Level } from 'src/constants/data-constants';
import { Route } from 'src/constants/route-constant';
import { MOCK_TEST_RESULTS } from '../../../constants/mock-test-results';
import { TestHttpService } from '../../services/test/test/test-http.service';
import { AuthStoreService } from '../../services/store/auth-store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results: Test[] = [];

  levels = [...Object.values(Level)];

  selectedLevel: Level | undefined;

  constructor(
    private router: Router,
    private testHttpService: TestHttpService,
    private authStoreService: AuthStoreService,
  ) {}

  ngOnInit() {
    // this.results = [...MOCK_TEST_RESULTS];
    this.setTestResults();
  }

  get testsCount() {
    return this.results.length;
  }

  setTestResults(): void {
    if (this.authStoreService.user) {
      const userId = this.authStoreService.user.id;
      this.testHttpService.getTestResults(userId).subscribe((tests: Test[]) => {
        this.results = tests;
      });
    }
  }

  onStartButtonClick(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.test]);
    });
  }
}
