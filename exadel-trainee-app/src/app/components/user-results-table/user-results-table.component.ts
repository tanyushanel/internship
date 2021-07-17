import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/interfaces/test';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { results } from 'src/constants/mock-test-data';

@Component({
  selector: 'app-user-results-table',
  templateUrl: './user-results-table.component.html',
  styleUrls: ['./user-results-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserResultsTableComponent implements OnInit {
  results!: Test[];

  columnsToDisplay: string[] = ['id', 'date', 'level', 'result'];

  expandedElement!: Test;

  ngOnInit(): void {
    this.results = results;
  }
}
