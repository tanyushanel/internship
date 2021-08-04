import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';
import { CoachEditorTest } from '../../../../mocks/users-utils.mock';
import { CoachEditorTabs } from '../../../../constants/data-constants';
import { GrammarAddingEditingDialogComponent } from '../grammar-adding-editing-dialog/grammar-adding-editing-dialog.component';
import { TopicAddingEditingDialogComponent } from '../topic-adding-editing-dialog/topic-adding-editing-dialog.component';
import { EditListeningDialogComponent } from '../edit-listening-dialog/edit-listening-dialog.component';
import { QuestionList } from '../../../services/coach-edit-http.service';
import { CoachEditStoreService } from '../coach-edit-store.service';

@Component({
  selector: 'app-coach-profile-editor-table',
  templateUrl: './editor-table.component.html',
  styleUrls: ['./editor-table.component.scss'],
})
export class EditorTableComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['id', 'level', 'edit'];

  dataSource: MatTableDataSource<QuestionList>;

  question: QuestionList | undefined;

  @Input() selectTab = '';

  @Input() table: QuestionList[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) tableView!: MatTable<CoachEditorTest>;

  constructor(public dialog: MatDialog, private coachEdit: CoachEditStoreService) {
    this.dataSource = new MatTableDataSource(this.table);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditor(row: QuestionList) {
    this.coachEdit.getQuestion(row.id);

    this.coachEdit.activeQuestion$.subscribe((question) => {
      if (question !== null) {
        console.log(question);

        if (this.selectTab === CoachEditorTabs.grammar)
          this.dialog.open(GrammarAddingEditingDialogComponent, {
            data: {
              ...question,
            },
          });
        else if (this.selectTab === CoachEditorTabs.audition) {
          this.dialog.open(EditListeningDialogComponent);
        } else if (this.selectTab === CoachEditorTabs.writingAndSpeaking)
          this.dialog.open(TopicAddingEditingDialogComponent, {
            data: { id: row.id, level: row.level, question: 'Question', isEdit: true },
          });
      }
    });
  }
}
