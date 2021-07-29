import { Component, OnInit } from '@angular/core';
import { MOCK_QUESTION_LIST } from '../../../constants/mock-grammar-test';
import { Question } from '../../interfaces/question-answer';

@Component({
  selector: 'app-grammar-test',
  templateUrl: './grammar-test.component.html',
  styleUrls: ['./grammar-test.component.scss'],
})
export class GrammarTestComponent implements OnInit {
  questions: Question[] = [];

  ngOnInit(): void {
    this.questions = [...MOCK_QUESTION_LIST];
  }
}
