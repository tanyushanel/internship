import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TestTimerComponent implements OnInit {
  timer!: Observable<number>;

  ngOnInit(): void {
    this.timer = timer(1000, 2000);

    this.timer.subscribe((val) => console.log(val));
  }
}
