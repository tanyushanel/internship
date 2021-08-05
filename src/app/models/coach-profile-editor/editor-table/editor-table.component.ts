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
import { CoachEditorTest } from '../../../../mocks/users-utils.mock';
import { CoachEditorTabs, EnglishLevel } from '../../../../constants/data-constants';
import { GrammarAddingEditingDialogComponent } from '../grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import { CoachEditStoreService } from '../coach-edit-store.service';
import { QuestionList } from '../../../interfaces/question.interfaces';
import { EditListeningDialogComponent } from '../edit-listening-dialog/edit-listening-dialog.component';
import { TopicAddingEditingDialogComponent } from '../topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { isSubstring } from '../../../helpers/filter-check';

@Component({
  selector: 'app-coach-profile-editor-table',
  templateUrl: './editor-table.component.html',
  styleUrls: ['./editor-table.component.scss'],
})
export class EditorTableComponent implements AfterViewInit, OnChanges, OnInit {
  displayedColumns: string[] = ['id', 'level', 'edit'];

  public searchQuery = '';

  languageLevel = EnglishLevel;

  dataSource: MatTableDataSource<QuestionList>;

  question: QuestionList | undefined;

  idFilter = new FormControl('');

  levelFilter = new FormControl('');

  filterValues = {
    id: '',
    level: '',
  };

  @Input() selectTab = '';

  @Input() table: QuestionList[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) tableView!: MatTable<CoachEditorTest>;

  constructor(public dialog: MatDialog, private coachEdit: CoachEditStoreService) {
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
    this.idFilter.valueChanges.subscribe((id) => {
      this.filterValues.id = id;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.levelFilter.valueChanges.subscribe((level) => {
      this.filterValues.level = level;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (filterValues: QuestionList, filter: string) => boolean {
    return function filterFunction(filterValues, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return (
        isSubstring(filterValues.id, searchTerms.id) &&
        isSubstring(filterValues.level, searchTerms.level)
      );
    };
  }

  openEditor(row: QuestionList) {
    this.coachEdit.getQuestion(row.id);

    const stream = this.coachEdit.question$.subscribe((question) => {
      if (question !== null) {
        if (this.selectTab === CoachEditorTabs.grammar) {
          const dialogRef = this.dialog.open(GrammarAddingEditingDialogComponent, {
            data: question,
          });

          dialogRef.afterClosed().subscribe((data) => stream.unsubscribe());
        } else if (this.selectTab === CoachEditorTabs.audition) {
          this.dialog.open(EditListeningDialogComponent, {
            autoFocus: false,
          });
        } else if (this.selectTab === CoachEditorTabs.writingAndSpeaking)
          this.dialog.open(TopicAddingEditingDialogComponent, {
            data: { id: row.id, level: row.level, question: 'Question', isEdit: true },
          });
      }
    });
  }
}
