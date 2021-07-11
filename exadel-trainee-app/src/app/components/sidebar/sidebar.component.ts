import { Component, OnInit } from '@angular/core';

interface Users {
  value: string;
  viewValue: string;
  permission: string;
  route: string[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isOpen = true;

  // mock data for check logic work sidebar
  selectedUser = 'user';

  users: Users[] = [
    { value: 'user', viewValue: 'User', permission: 'test', route: ['home'] },
    {
      value: 'hr',
      viewValue: 'HR',
      permission: 'watcher',
      route: ['home', 'users'],
    },
    {
      value: 'couch',
      viewValue: 'Couch',
      permission: 'check',
      route: ['home', 'check', 'editor'],
    },
    {
      value: 'admin',
      viewValue: 'Admin',
      permission: 'all',
      route: ['home', 'manage', 'statistics'],
    },
  ];

  ngOnInit(): void {}

  handleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
