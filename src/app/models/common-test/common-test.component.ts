import { Component, ViewChild, OnChanges } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { CommonTestService } from './common-test.service';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnChanges {
  selectedIndex = 0;

  @ViewChild('tabGroup', { static: false }) tabGroup!: MatTabGroup;

  constructor(private commonTestService: CommonTestService) {}

  ngOnChanges(): void {
    this.selectedIndex = this.commonTestService.selectedIndex;
  }

  setTabIndex(ind: number): void {
    this.tabGroup.selectedIndex = ind;
  }
}
