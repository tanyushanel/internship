import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  position: number;
  date: number;
  level: string;
  coach: string;
  expl: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 1,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 2,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 3,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 4,
    level: 'ber=g',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 5,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 6,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 7,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 8,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 9,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 10,
    level: 'adv',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 11,
    level: 'inter',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    position: 12,
    level: 'beg',
    date: Date.now(),
    coach: 'Nich',
    expl: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem,LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
];
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminProfileComponent implements OnInit {
  displayedColumns: string[] = ['Position', 'Level', 'Date', 'Coach'];

  dataSource = ELEMENT_DATA;

  expandedElement: PeriodicElement | undefined;

  ngOnInit(): void {}
}
