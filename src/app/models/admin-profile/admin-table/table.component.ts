import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { AdminTestTabs, TestData } from '../../../../mocks/admin-profile-utils.mock';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  AssignSelector = true;

  @Input() tableData: TestData[] = [];

  @Input() displaedColums: string[] = [];

  constructor(
    public dialog: MatDialog,
    private readonly http: HttpClient,
    private service: ServiceComponent,
  ) {}

  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {}

  openDialog(element: TestData) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: {
        position: element.position,
        isAssign: element.isAssign,
        isHighPriority: element.isHighPriority,
        coach: element.coach,
        date: element.date,
        level: element.level,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.service.postData(result);
    });
  }
}
