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
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CoachEditorTest } from '../../../../mocks/users-utils.mock';
import { CoachEditorTabs, languageLevel } from '../../../constants/data-constants';
import { GrammarAddingEditingDialogComponent } from '../grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import { CoachQuestionStoreService } from '../../../services/store/coach-question-store.service';
import { TableData } from '../../../interfaces/question-answer';
import { TopicAddingEditingDialogComponent } from '../topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { isSubstring } from '../../../helpers/filter-check';
import { CoachTopicStoreService } from '../../../services/store/coach-topic-store.service';
import { ListeningAddingEditingDialogComponent } from '../listening-adding-editing-dialog/listening-adding-editing-dialog.component';
import { CoachListeningStoreService } from '../../../services/store/coach-listening-store.service';
import { CoachAudioDataStoreService } from '../../../services/store/coach-audio-data-store.service';

@Component({
  selector: 'app-coach-profile-editor-table',
  templateUrl: './editor-table.component.html',
  styleUrls: ['./editor-table.component.scss'],
})
export class EditorTableComponent implements AfterViewInit, OnChanges, OnInit {
  displayedColumns: string[] = ['id', 'questionName', 'level', 'creator', 'actions'];

  public searchQuery = '';

  languageLevel = languageLevel;

  dataSource: MatTableDataSource<TableData>;

  idFilter = new FormControl('');

  idNameFilter = new FormControl('');

  idCoach = new FormControl('');

  levelFilter = new FormControl('');

  filterValues = {
    number: '',
    name: '',
    level: '',
    creatorName: '',
  };

  @Input() selectTab = '';

  @Input() table: TableData[] = [];

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
      const sortState: Sort = { active: 'level', direction: 'asc' };
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
    this.idFilter.valueChanges.subscribe((number) => {
      this.filterValues.number = number;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.idNameFilter.valueChanges.subscribe((name) => {
      this.filterValues.name = name;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.levelFilter.valueChanges.subscribe((level) => {
      this.filterValues.level = level;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.idCoach.valueChanges.subscribe((creatorName) => {
      this.filterValues.creatorName = creatorName;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (filterValues: TableData, filter: string) => boolean {
    return function filterFunction(filterValues, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        isSubstring(filterValues.number, searchTerms.number) &&
        isSubstring(languageLevel[filterValues.level], searchTerms.level) &&
        isSubstring(filterValues.name, searchTerms.name) &&
        isSubstring(filterValues.creatorName, searchTerms.creatorName)
      );
    };
  }

  openEditor(row: TableData) {
    if (this.selectTab === CoachEditorTabs.grammar) {
      this.coachEditQuestion.getQuestion(row.id);
      this.coachEditQuestion.question$.pipe(take(1)).subscribe((question) => {
        if (question !== null) {
          this.dialog.open(GrammarAddingEditingDialogComponent, {
            data: { ...question, isEdit: true },
            disableClose: true,
          });
        }
      });
    } else if (this.selectTab === CoachEditorTabs.audition) {
      this.coachListening.getListening(row.id);
      this.coachAudioData.downloadListeningFile();
      this.coachListening.listening$.pipe(take(1)).subscribe((listen) => {
        if (listen !== null) {
          this.dialog.open(ListeningAddingEditingDialogComponent, {
            data: { ...listen, isEdit: true },
            disableClose: true,
          });
        }
      });
    } else if (this.selectTab === CoachEditorTabs.writingAndSpeaking)
      this.coachEditTopic.getTopic(row.id);
    this.coachEditTopic.topic$.pipe(take(1)).subscribe((topic) => {
      if (topic !== null) {
        this.dialog.open(TopicAddingEditingDialogComponent, {
          data: { ...topic, isEdit: true },
          disableClose: true,
        });
      }
    });
  }

  delete(id: string) {
    if (this.selectTab === CoachEditorTabs.grammar) {
      this.coachEditQuestion.deleteQuestion(id);
    } else if (this.selectTab === CoachEditorTabs.audition) {
      this.coachListening.deleteListening(id);
    } else if (this.selectTab === CoachEditorTabs.writingAndSpeaking) {
      this.coachEditTopic.deleteTopic(id);
    }
  }
}
