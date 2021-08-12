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
import { EditListeningDialogComponent } from '../edit-listening-dialog/edit-listening-dialog.component';
import { TopicAddingEditingDialogComponent } from '../topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { isSubstring } from '../../../helpers/filter-check';
import { CoachTopicStoreService } from '../../../services/store/coach-topic-store.service';

@Component({
  selector: 'app-coach-profile-editor-table',
  templateUrl: './editor-table.component.html',
  styleUrls: ['./editor-table.component.scss'],
})
export class EditorTableComponent implements AfterViewInit, OnChanges, OnInit {
  displayedColumns: string[] = ['id', 'level', 'actions'];

  public searchQuery = '';

  languageLevel = languageLevel;

  dataSource: MatTableDataSource<TableData>;

  idFilter = new FormControl('');

  levelFilter = new FormControl('');

  filterValues = {
    number: '',
    level: '',
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
    this.levelFilter.valueChanges.subscribe((level) => {
      this.filterValues.level = level;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (filterValues: TableData, filter: string) => boolean {
    return function filterFunction(filterValues, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        isSubstring(filterValues.number, searchTerms.number) &&
        isSubstring(languageLevel[filterValues.level], searchTerms.level)
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
      this.dialog.open(EditListeningDialogComponent, {
        autoFocus: false,
        disableClose: true,
      });
    } else if (this.selectTab === CoachEditorTabs.writingAndSpeaking)
      this.dialog.open(TopicAddingEditingDialogComponent, {
        data: {
          id: row.id,
          level: row.level,
          question: 'Question',
          isEdit: true,
          disableClose: true,
        },
      });
  }
}
