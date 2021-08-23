import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CoachEditorTest } from '../../../../mocks/users-utils.mock';
import { CoachQuestionStoreService } from '../../../services/store/coach-question-store.service';
import { CoachTopicStoreService } from '../../../services/store/coach-topic-store.service';
import { CoachListeningStoreService } from '../../../services/store/coach-listening-store.service';
import { CoachAudioDataStoreService } from '../../../services/store/coach-audio-data-store.service';
import { isSubstring } from '../../../helpers/filter-check';
import { CoachEditorTabs, languageLevel } from '../../../constants/data-constants';
import { GrammarAddingEditingDialogComponent } from '../../coach-profile-editor/grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import { ListeningAddingEditingDialogComponent } from '../../coach-profile-editor/listening-adding-editing-dialog/listening-adding-editing-dialog.component';
import { TopicAddingEditingDialogComponent } from '../../coach-profile-editor/topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { GetMistakeReportID, MistakeReport } from '../../../interfaces/mistake-report';

@Component({
  selector: 'app-report-mistake-table',
  templateUrl: './report-mistake-table.component.html',
  styleUrls: ['./report-mistake-table.component.scss'],
})
export class ReportMistakeTableComponent implements OnInit, AfterViewInit, OnChanges {
  displayedColumns: string[] = ['description', 'creationDate', 'coachName', 'edit'];

  public searchQuery = '';

  languageLevel = languageLevel;

  dataSource: MatTableDataSource<MistakeReport>;

  idFilter = new FormControl('');

  idNameFilter = new FormControl('');

  idCoach = new FormControl('');

  levelFilter = new FormControl('');

  filterValues = {
    coachName: '',
    description: '',
    creationDate: '',
  };

  @Input() selectTab = '';

  @Input() table: MistakeReport[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) tableView!: MatTable<CoachEditorTest>;

  constructor(
    public dialog: MatDialog,
    private coachEditQuestion: CoachQuestionStoreService,
    private coachEditTopic: CoachTopicStoreService,
    private coachListening: CoachListeningStoreService,
    private coachAudioData: CoachAudioDataStoreService,
  ) {
    this.dataSource = new MatTableDataSource(this.table);
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout(() => {
      const sortState: Sort = { active: 'creationDate', direction: 'desc' };
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.table?.currentValue) {
      this.dataSource.data = changes.table.currentValue;
    }
  }

  ngOnInit() {
    this.idFilter.valueChanges.subscribe((coachName) => {
      this.filterValues.coachName = coachName;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.idNameFilter.valueChanges.subscribe((description) => {
      this.filterValues.description = description;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.levelFilter.valueChanges.subscribe((creationDate) => {
      this.filterValues.creationDate = creationDate;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (filterValues: MistakeReport, filter: string) => boolean {
    return function filterFunction(filterValues, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        isSubstring(filterValues.coachName, searchTerms.coachName) &&
        isSubstring(filterValues.description, searchTerms.description) &&
        isSubstring(filterValues.creationDate, searchTerms.creationDate)
      );
    };
  }

  openEditor(row: GetMistakeReportID, description: string) {
    if (this.selectTab === CoachEditorTabs.grammar) {
      this.coachEditQuestion.getQuestion(row.questionId);
      this.coachEditQuestion.question$.pipe(take(1)).subscribe((question) => {
        if (question !== null) {
          this.dialog.open(GrammarAddingEditingDialogComponent, {
            data: { ...question, isEdit: true, description },
            disableClose: true,
          });
        }
      });
    } else if (this.selectTab === CoachEditorTabs.audition) {
      this.coachListening.getListening(row.auditionId);
      this.coachAudioData.downloadListeningFile();
      this.coachListening.listening$.pipe(take(1)).subscribe((listen) => {
        if (listen !== null) {
          this.dialog.open(ListeningAddingEditingDialogComponent, {
            data: { ...listen, isEdit: true, description },
            disableClose: true,
          });
        }
      });
    } else if (this.selectTab === CoachEditorTabs.writingAndSpeaking)
      this.coachEditTopic.getTopic(row.topicId);
    this.coachEditTopic.topic$.pipe(take(1)).subscribe((topic) => {
      if (topic !== null) {
        this.dialog.open(TopicAddingEditingDialogComponent, {
          data: { ...topic, isEdit: true, description },
          disableClose: true,
        });
      }
    });
  }
}
