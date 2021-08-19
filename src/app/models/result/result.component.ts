import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestStoreService } from 'src/app/services/store/test-store.service';
import { SubmitTestResponse } from '../../interfaces/test';
import { Route } from '../../constants/route-constant';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  currentTest$: Observable<SubmitTestResponse> = this.testStoreService.submitTestBody$;

  currentGrammarResult = 0;

  currentAuditionResult = 0;

  constructor(private testStoreService: TestStoreService, private router: Router) {}

  ngOnInit(): void {
    this.currentTest$.subscribe((test) => {
      if (test) {
        this.currentGrammarResult = test.grammarMark;
        this.currentAuditionResult = test.auditionMark;
      }
    });
  }

  goHome(): void {
    this.router.navigate([Route.home]);
  }
}
