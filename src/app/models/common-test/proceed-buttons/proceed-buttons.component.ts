import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-proceed-buttons',
  templateUrl: './proceed-buttons.component.html',
  styleUrls: ['./proceed-buttons.component.scss'],
})
export class ProceedButtonsComponent implements OnInit {
  @Input() currentIndex = 0;

  @Output() changedIndex: EventEmitter<number> = new EventEmitter<number>();

  maxIndex = 3;

  ngOnInit(): void {}

  onPrevClick(): void {
    this.currentIndex -= 1;
    this.changedIndex.emit(this.currentIndex);
  }

  onNextClick(): void {
    this.currentIndex += 1;
    this.changedIndex.emit(this.currentIndex);
  }
}
