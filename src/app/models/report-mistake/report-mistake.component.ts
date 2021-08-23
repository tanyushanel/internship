import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CoachEditorTabs } from '../../constants/data-constants';
import { MistakeReportStoreService } from '../../services/store/mistake-report-store.service';
import { MistakeReport } from '../../interfaces/mistake-report';

@Component({
  selector: 'app-report-mistake',
  templateUrl: './report-mistake.component.html',
  styleUrls: ['./report-mistake.component.scss'],
})
export class ReportMistakeComponent implements OnInit {
  public selectedTab = CoachEditorTabs.grammar;

  constructor(public dialog: MatDialog, private reports: MistakeReportStoreService) {}

  tables$: Observable<MistakeReport[]> = this.reports.mistakes$;

  tabsTitle: CoachEditorTabs[] = [
    CoachEditorTabs.grammar,
    CoachEditorTabs.audition,
    CoachEditorTabs.writingAndSpeaking,
  ];

  ngOnInit(): void {
    this.reports.getGrammarMistake();
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.selectedTab = CoachEditorTabs.grammar;
      this.reports.getGrammarMistake();
      this.tables$ = this.reports.mistakes$;
    } else if (tabChangeEvent.index === 1) {
      this.selectedTab = CoachEditorTabs.audition;
      this.reports.getListeningMistake();
      this.tables$ = this.reports.mistakes$;
    } else if (tabChangeEvent.index === 2) {
      this.selectedTab = CoachEditorTabs.writingAndSpeaking;
      this.reports.getWritingAndSpeakingMistake();
      this.tables$ = this.reports.mistakes$;
    }
  }
}
