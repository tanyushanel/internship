import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CoachEditorTabs } from '../../../../constants/data-constants';
import {
  CoachEditorTest,
  MOCK_AUDITION_QUESTIONS,
  MOCK_GRAMMAR_QUESTIONS,
  MOCK_WRITING_AND_SPEAKING_QUESTIONS,
} from '../../../../mocks/users-utils.mock';

@Component({
  selector: 'app-coach-profile-editor',
  templateUrl: './coach-profile-editor.component.html',
  styleUrls: ['./coach-profile-editor.component.scss'],
})
export class CoachProfileEditorComponent implements OnInit {
  public selectedTab = 'Grammar Question';

  constructor() {
    this.tables = {
      [CoachEditorTabs.grammar]: MOCK_GRAMMAR_QUESTIONS,
      [CoachEditorTabs.audition]: MOCK_AUDITION_QUESTIONS,
      [CoachEditorTabs.writingAndSpeaking]: MOCK_WRITING_AND_SPEAKING_QUESTIONS,
    };
  }

  tables: { [key: string]: CoachEditorTest[] } = {};

  tabs: CoachEditorTabs[] = [
    CoachEditorTabs.grammar,
    CoachEditorTabs.audition,
    CoachEditorTabs.writingAndSpeaking,
  ];

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.selectedTab = 'Grammar Question';
    } else if (tabChangeEvent.index === 1) {
      this.selectedTab = 'Audition';
    } else if (tabChangeEvent.index === 2) {
      this.selectedTab = 'Writing&Speaking';
    }
  }

  ngOnInit(): void {}
}
