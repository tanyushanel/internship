import { Component, OnInit, OnChanges } from '@angular/core';
import { MOCK_QUESTION_LIST, Question } from '../../../constants/mock-grammar-test';

@Component({
  selector: 'app-listening',
  templateUrl: './listening-test.component.html',
  styleUrls: ['./listening-test.component.scss'],
})
export class ListeningTestComponent implements OnInit {
  questions!: Question[];

  selectedIndex = 1;

  ngOnInit(): void {
    this.questions = [...MOCK_QUESTION_LIST];
  }
}
