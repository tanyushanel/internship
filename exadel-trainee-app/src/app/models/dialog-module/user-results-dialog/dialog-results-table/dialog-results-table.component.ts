import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../mocks';

@Component({
  selector: 'app-dialog-results-table',
  templateUrl: './dialog-results-table.component.html',
  styleUrls: ['./dialog-results-table.component.scss'],
})
export class DialogResultsTableComponent implements OnInit {
  @Input() results: Test[] = [];

  btnIndexes: boolean[] = [];

  ngOnInit(): void {
    this.btnIndexes = new Array(this.results.length);
    this.btnIndexes.fill(true);
  }

  onShowResults(res: Test, index: number): void {
    if (this.results.indexOf(res) === index) this.btnIndexes[index] = false;
  }
}
