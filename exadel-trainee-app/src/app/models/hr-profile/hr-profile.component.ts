import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  name: string;
  lastName: string;
}

const MOCK_LAST_NAMES: string[] = [
  'Иванов',
  'Петоров',
  'Сидоров',
  'Фамилия 1',
  'Фамилия 2',
  'Фамилия 3',
  'Фамилия 4',
  'Фамилия 5',
];
const MOCK_NAMES: string[] = [
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

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrls: ['./hr-profile.component.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class HrProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'lastName', 'assessment'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor() {
    // Create 100 users
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
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

function createNewUser(id: number): UserData {
  const name = `${MOCK_NAMES[Math.round(Math.random() * (MOCK_NAMES.length - 1))]}`;

  return {
    id: id.toString(),
    name,
    lastName: MOCK_LAST_NAMES[Math.round(Math.random() * (MOCK_LAST_NAMES.length - 1))],
  };
}
