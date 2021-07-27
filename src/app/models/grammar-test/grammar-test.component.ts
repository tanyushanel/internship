import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-grammar-test',
  templateUrl: './grammar-test.component.html',
  styleUrls: ['./grammar-test.component.scss'],
})
export class GrammarTestComponent implements OnInit, OnChanges {
  steps = 0;

  ngOnInit(): void {
    this.steps = 12;
  }

  ngOnChanges(): void {
    this.steps = 10;
  }
}
