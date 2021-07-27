import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-listening',
  templateUrl: './listening-test.component.html',
  styleUrls: ['./listening-test.component.scss'],
})
export class ListeningTestComponent implements OnInit, OnChanges {
  steps = 0;

  ngOnInit(): void {
    this.steps = 10;
  }

  ngOnChanges(): void {
    this.steps = 10;
  }
}
