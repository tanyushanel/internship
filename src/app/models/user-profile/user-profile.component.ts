import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Test } from 'src/app/interfaces/test';
import { Level } from 'src/constants/data-constants';
import { Route } from 'src/constants/route-constant';
import { TestStoreService } from '../../services/test/test/test-store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results$: Observable<Test[] | null> = this.testStoreService.testResults$;

  levels = [...Object.values(Level)];

  selectedLevel: Level | undefined;

  constructor(private router: Router, private testStoreService: TestStoreService) {}

  ngOnInit() {
    this.testStoreService.setTestResults();
  }

  onStartButtonClick(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.test]);
    });
  }
}
