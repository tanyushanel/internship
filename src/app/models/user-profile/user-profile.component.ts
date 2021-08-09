import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Level } from 'src/app/constants/data-constants';
import { Route } from 'src/app/constants/route-constant';
import { Test } from '../../interfaces/test';
import { TestStoreService } from '../../services/store/test-store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  results$: Observable<Test[] | null> = this.testStoreService.testResults$;

  levels = [...Object.values(Level)];

  isStarted = false;

  selectedLevel!: Level;

  isAssigned = false;

  constructor(private router: Router, private testStoreService: TestStoreService) {}

  ngOnInit(): void {
    this.testStoreService.getTestResults();
  }

  onStartButtonClick(level: Level): void {
    this.isStarted = true;
    this.testStoreService.selectLevel(level);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.test]);
    });
  }

  onStartAssignedButtonClick(level: Level): void {
    this.isStarted = true;
    this.testStoreService.selectLevel(level);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([Route.assigned]);
    });
  }
}
