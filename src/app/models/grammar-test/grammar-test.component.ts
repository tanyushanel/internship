import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../../interfaces/test';
// import { MOCK_QUESTION_LIST } from '../../../constants/mock-grammar-test';
import { Question } from '../../../interfaces/question-answer';

@Component({
  selector: 'app-grammar-test',
  templateUrl: './grammar-test.component.html',
  styleUrls: ['./grammar-test.component.scss'],
})
export class GrammarTestComponent implements OnInit {
  @Input() test$!: Observable<Test | null>;

  questions: Question[] = [];

  ngOnInit(): void {
    // this.questions = [...MOCK_QUESTION_LIST];
  }
}
