import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TestTimerComponent implements OnInit {
  timer = 0;

  counter = 60;

  ngOnInit(): void {
    timer(0, 60000)
      .pipe(
        takeWhile(() => this.counter > 0),
        tap(() => (this.counter -= 1)),
      )
      .subscribe(() => (this.timer = this.counter));
  }
}
