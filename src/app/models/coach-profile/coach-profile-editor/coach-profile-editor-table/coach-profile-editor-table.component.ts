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
import { CoachEditorTest } from '../../../../../mocks/users-utils.mock';
import { CoachEditorTabs } from '../../../../../constants/data-constants';
import { CoachProfileEditorTopicEditDialogComponent } from '../coach-profile-editor-topic-edit-dialog/coach-profile-editor-topic-edit-dialog.component';
import { CoachProfileEditorGrammarEditDialogComponent } from '../coach-profile-editor-grammar-edit-dialog/coach-profile-editor-grammar-edit-dialog.component';

@Component({
  selector: 'app-coach-profile-editor-table',
  templateUrl: './coach-profile-editor-table.component.html',
  styleUrls: ['./coach-profile-editor-table.component.scss'],
})
export class CoachProfileEditorTableComponent implements AfterViewInit, OnChanges {
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

  openEditor(row: any) {
    if (this.selectTab === CoachEditorTabs.grammar)
      this.dialog.open(CoachProfileEditorGrammarEditDialogComponent, {
        data: { id: row.id, level: row.level },
      });
    else if (this.selectTab === CoachEditorTabs.audition) console.log('Andrei modal');
    else if (this.selectTab === CoachEditorTabs.writingAndSpeaking)
      this.dialog.open(CoachProfileEditorTopicEditDialogComponent, {
        data: { id: row.id, level: row.level },
      });
  }
}
