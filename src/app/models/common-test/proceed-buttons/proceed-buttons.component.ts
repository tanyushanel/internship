import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-proceed-buttons',
  templateUrl: './proceed-buttons.component.html',
  styleUrls: ['./proceed-buttons.component.scss'],
})
export class ProceedButtonsComponent implements OnInit {
  @Input() selectedIndex: number;

  @Output() selectedIndexOut: EventEmitter<number> = new EventEmitter<number>();

  tabCount = 4;

  constructor() {
    this.selectedIndex = 0;
  }

  ngOnInit(): void {}

  onClick(i: number) {
    this.selectedIndex = (this.selectedIndex + i) % this.tabCount;

    this.selectedIndexOut.emit(this.selectedIndex);
  }
}
