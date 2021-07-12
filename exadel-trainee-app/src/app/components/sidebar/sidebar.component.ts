import { Component, OnInit } from '@angular/core';
import { Role } from '../../../constants/route-constant';
import {
  UserRoutesType,
  UsersPermission,
  usersRoute,
  userPermission,
} from '../../../constants/mock-user-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isOpen = true;

  selectedUser = Role.user;

  usersRoute: UserRoutesType = usersRoute;

  userPermission: UsersPermission[] = userPermission;

  ngOnInit(): void {}

  handleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
