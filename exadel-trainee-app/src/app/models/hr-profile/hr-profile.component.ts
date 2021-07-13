import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  name: string;
  lastName: string;
}

const LastName: string[] = [
  'Иванов',
  'Петоров',
  'Сидоров',
  'Фамилия 1',
  'Фамилия 2',
  'Фамилия 3',
  'Фамилия 4',
  'Фамилия 5',
];
const NAMES: string[] = [
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

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor() {
    // Create 100 users
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = `${NAMES[Math.round(Math.random() * (NAMES.length - 1))]}`;

  return {
    id: id.toString(),
    name,
    lastName: LastName[Math.round(Math.random() * (LastName.length - 1))],
  };
}
