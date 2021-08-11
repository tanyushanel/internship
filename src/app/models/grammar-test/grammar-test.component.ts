import { Component, Input } from '@angular/core';
import { Question } from '../../interfaces/question-answer';

@Component({
  selector: 'app-grammar-test',
  templateUrl: './grammar-test.component.html',
  styleUrls: ['./grammar-test.component.scss'],
})
export class GrammarTestComponent {
  @Input() questions: Question[] | null = null;
}
