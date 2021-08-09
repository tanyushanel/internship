import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerQuestion, Question } from '../../interfaces/question-answer';

@Component({
  selector: 'app-grammar-test',
  templateUrl: './grammar-test.component.html',
  styleUrls: ['./grammar-test.component.scss'],
})
export class GrammarTestComponent {
  @Input() questions: Question[] | null = null;

  @Input() answerChosen: AnswerQuestion | null = null;

  @Output() answerGrammar = new EventEmitter<AnswerQuestion | null>();

  onAnswerSubmit(): void {
    this.answerGrammar.emit(this.answerChosen);
  }
}
