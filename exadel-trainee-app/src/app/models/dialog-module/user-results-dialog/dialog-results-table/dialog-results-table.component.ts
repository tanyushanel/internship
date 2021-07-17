import { Test } from 'src/app/interfaces/test';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dialog-results-table',
  templateUrl: './dialog-results-table.component.html',
  styleUrls: ['./dialog-results-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DialogResultsTableComponent implements OnInit {
  @Input() results: Test[] = [];

  columnsToDisplay: any[] = ['id', 'date', 'level', 'result'];

  expandedElement!: Test;

  ngOnInit(): void {}
}
