import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proceed-buttons',
  templateUrl: './proceed-buttons.component.html',
  styleUrls: ['./proceed-buttons.component.scss'],
})
export class ProceedButtonsComponent implements OnInit {
  @Output() moveClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  onClick(i: number) {
    this.moveClicked.emit(i);
  }
}
