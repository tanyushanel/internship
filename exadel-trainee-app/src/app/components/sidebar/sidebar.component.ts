import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRoutesType, usersRoute } from '../../../constants/mock-user-data';
import { UserRoleService } from '../../services/user-role.service';
import { UserResponseType } from '../../../interfaces/user.interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isOpen = true;

  readonly user$: Observable<UserResponseType> = this.userRoleSvr.activeUser$;

  usersRoute: UserRoutesType = usersRoute;

  constructor(private readonly userRoleSvr: UserRoleService) {}

  ngOnInit(): void {
    this.userRoleSvr.getActiveUser();
  }

  handleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
