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

@Component({
  selector: 'app-coach-profile-editor-table',
  templateUrl: './editor-table.component.html',
  styleUrls: ['./editor-table.component.scss'],
})
export class EditorTableComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['id', 'level', 'edit'];

  dataSource: MatTableDataSource<CoachEditorTest>;

  @Input() selectTab = '';

  @Input() table: CoachEditorTest[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) tableView!: MatTable<CoachEditorTest>;

  constructor(public dialog: MatDialog) {
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

  openEditor(row: CoachEditorTest) {
    if (this.selectTab === CoachEditorTabs.grammar)
      this.dialog.open(GrammarAddingEditingDialogComponent, {
        data: {
          id: row.id,
          level: row.level,
          answers: [
            {
              title: '1',
              isRight: true,
            },
            {
              title: '2',
              isRight: false,
            },
            {
              title: '3',
              isRight: false,
            },
            {
              title: '4',
              isRight: false,
            },
          ],
          question: 'Question',
          isEdit: true,
        },
      });
    else if (this.selectTab === CoachEditorTabs.audition) console.log('Andrei modal');
    else if (this.selectTab === CoachEditorTabs.writingAndSpeaking)
      this.dialog.open(TopicAddingEditingDialogComponent, {
        data: { id: row.id, level: row.level, question: 'Question', isEdit: true },
      });
  }
}
