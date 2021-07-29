import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-test',
  templateUrl: './common-test.component.html',
  styleUrls: ['./common-test.component.scss'],
})
export class CommonTestComponent implements OnInit {
  selectedIndex = 0;

  ngOnInit() {}

  setTabIndex(ind: number): void {
    this.selectedIndex = ind;
  }
}
