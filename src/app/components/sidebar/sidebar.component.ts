import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { UserRoutesType, usersRoute } from '../../../constants/mock-user-data';
import { UserResponseType } from '../../../interfaces/user.interfaces';
import { AuthStoreService } from '../../services/store/auth-store.service';

let browserRefresh = false;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  isOpen = true;

  readonly user$: Observable<UserResponseType | null> = this.userService.activeUser$;

  readonly isSingIn$: Observable<boolean> = this.userService.isSignIn$;

  usersRoute: UserRoutesType = usersRoute;

  subscription: Subscription;

  constructor(
    private readonly userService: AuthStoreService,
    public readonly authService: AuthStoreService,
    private router: Router,
  ) {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !this.router.navigated;
        if (browserRefresh) {
          this.authService.getUser();
        }
      }
    });
  }

  ngOnInit(): void {}

  handleSidebar() {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
