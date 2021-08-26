import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerQuestion, Question } from '../../interfaces/question-answer';

@Component({
  selector: 'app-grammar-test',
  templateUrl: './grammar-test.component.html',
  styleUrls: ['./grammar-test.component.scss'],
})
export class GrammarTestComponent {
  @Input() questions: Question[] | null = null;

  @Input() testId: string | null = null;

  @Output() answersGrammar = new EventEmitter<string[] | null>();

  onAnswersSubmit(answers: string[] | null): void {
    if (answers) this.answersGrammar.emit(answers);
  }
}
