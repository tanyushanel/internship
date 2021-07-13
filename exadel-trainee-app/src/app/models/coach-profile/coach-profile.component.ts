import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
}

const SURNAMES: string[] = [
  'Walker',
  'Lee',
  'Young',
  'Johnson',
  'Parker',
  'Jones',
  'Davis',
  'Rodriguez',
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
  'Isla',
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
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'button'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
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

  OnClick(id: number) {
    console.log('Click', id);
  }
}

function createNewUser(id: number): UserData {
  const name = `${NAMES[Math.round(Math.random() * (NAMES.length - 1))]}`;

  return {
    id: id.toString(),
    firstName: name,
    lastName: SURNAMES[Math.round(Math.random() * (SURNAMES.length - 1))],
  };
}
