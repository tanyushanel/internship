import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
}

const MOCK_LASTNAMES: string[] = [
  'Иванов',
  'Петоров',
  'Сидоров',
  'Фамилия 1',
  'Фамилия 2',
  'Фамилия 3',
  'Фамилия 4',
  'Фамилия 5',
];
const MOCK_FIRSTNAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

function createNewUser(id: number): UserData {
  const firstName = `${MOCK_FIRSTNAMES[Math.round(Math.random() * (MOCK_FIRSTNAMES.length - 1))]}`;

  return {
    id: id.toString(),
    firstName,
    lastName: MOCK_LASTNAMES[Math.round(Math.random() * (MOCK_LASTNAMES.length - 1))],
  };
}

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.scss'],
})
export class HrProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'assessment'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor() {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
