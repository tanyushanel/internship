import { Component, ViewChild, OnChanges } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { CommonTestService } from './common-test.service';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent {
  // selectedIndex = 0;

  // tabCount = 4;

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  setTabIndex(ind: number): void {
    if (this.tabGroup !== null && this.tabGroup.selectedIndex !== null)
      this.tabGroup.selectedIndex += ind;
  }
}
