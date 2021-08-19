import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  @Input() selectedLang = '';

  isOpen = true;

  readonly user$: Observable<UserResponseType | null> = this.userService.activeUser$;

  readonly isSingIn$: Observable<boolean> = this.userService.isSignIn$;

  usersRoute: UserRoutesType = usersRoute;

  constructor(
    private readonly userService: AuthStoreService,
    public readonly authService: AuthStoreService,
    private translate: TranslateService,
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.selectedLang = this.translate.currentLang;
  }

  getWidth() {
    return this.isOpen ? 'width:14%;' : 'width:4%;';
  }

  toggleShow() {
    this.isOpen = !this.isOpen;
  }

  langChange(event: string): void {
    this.selectedLang = event;
  }
}
