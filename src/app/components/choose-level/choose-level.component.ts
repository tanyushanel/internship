import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Level } from '../../constants/data-constants';

@Component({
  selector: 'app-choose-level',
  templateUrl: './choose-level.component.html',
  styleUrls: ['./choose-level.component.scss'],
})
export class ChooseLevelComponent {
  @Input() currentLevel: Level | undefined;

  @Output() changeLevel = new EventEmitter<Level>();

  LevelList = Object.values(Level);

  onLevelChange($event: Level) {
    this.changeLevel.emit($event);
  }
}
