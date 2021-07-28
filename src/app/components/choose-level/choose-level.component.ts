import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Level } from '../../../constants/data-constants';

@Component({
  selector: 'app-choose-level',
  templateUrl: './choose-level.component.html',
  styleUrls: ['./choose-level.component.scss'],
})
export class ChooseLevelComponent {
  @Input() currentLevel: Level | undefined;

  @Output() changeLevel = new EventEmitter<Level>();

  levels: Level[] = [
    Level.Advanced,
    Level.UpperIntermediate,
    Level.Intermediate,
    Level.PreIntermediate,
    Level.Elementary,
  ];

  onLevelChange($event: MatOptionSelectionChange) {
    this.changeLevel.emit($event.source.value);
  }
}
