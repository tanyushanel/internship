import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TestTimerComponent implements OnInit {
  timer = 0;

  ngOnInit(): void {
    let counter = 60;

    timer(0, 60000)
      .pipe(
        takeWhile(() => counter > 0),
        tap(() => (counter -= 1)),
      )
      .subscribe(() => (this.timer = counter));
  }
}
