import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-proceed-buttons',
  templateUrl: './proceed-buttons.component.html',
  styleUrls: ['./proceed-buttons.component.scss'],
})
export class ProceedButtonsComponent implements OnInit {
  @Input() number: any;

  @Output() moveClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  onClick(i: number) {
    this.moveClicked.emit(i);
  }
}
