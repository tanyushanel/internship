import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TestTimerComponent implements OnInit {
  @Output() timeEmitted = new EventEmitter<number>();

  // minutes = 60;
  minutes = 10;

  timer = 0;

  ngOnInit(): void {
    // timer(0, 60000)
    // timer(0, 1000)
    //   .pipe(
    //     takeWhile(() => this.minutes > 0),
    //     tap(() => (this.minutes -= 1)),
    //   )
    //   .subscribe(() => (this.timer = this.minutes));
  }

  onTimeGo(time: number): void {
    this.timeEmitted.emit(time);
  }
}
