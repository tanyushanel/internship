import { Component, OnInit } from '@angular/core';
import { scan, takeWhile } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timer$ = timer(0, 1000).pipe(
    // eslint-disable-next-line no-param-reassign
    scan((acc) => (acc -= 1), 120),
    takeWhile((x) => x >= 0),
  );

  ngOnInit(): void {}
}
