import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRoutesType, usersRoute } from '../../constants/mock-user-data';
import { UserResponseType } from '../../interfaces/user.interfaces';
import { AuthStoreService } from '../../services/store/auth-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isOpen = true;

  readonly user$: Observable<UserResponseType | null> = this.userService.activeUser$;

  readonly isSingIn$: Observable<boolean> = this.userService.isSignIn$;

  usersRoute: UserRoutesType = usersRoute;

  constructor(
    private readonly userService: AuthStoreService,
    public readonly authService: AuthStoreService,
  ) {}

  ngOnInit(): void {}

  handleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
