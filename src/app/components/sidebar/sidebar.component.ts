import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { UserRoutesType, usersRoute } from '../../constants/mock-user-data';
import { UserResponseType } from '../../interfaces/user.interfaces';
import { AuthStoreService } from '../../services/store/auth-store.service';
import { CoachAudioDataStoreService } from '../../services/store/coach-audio-data-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() selectedLang = '';

  isOpen = true;

  imgFilePath: string | SafeUrl | undefined;

  defaultAvatar =
    'https://scontent.fiev6-1.fna.fbcdn.net/v/t1.6435-9/89845151_2502495549967541_8418276994130640896_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6tnOcGrridIAX8LQjDw&_nc_ht=scontent.fiev6-1.fna&oh=b7143c9dda9fd3ef81c86e41f788a9ab&oe=612EA9AA';

  @ViewChild('img') img: ElementRef | undefined;

  readonly user$: Observable<UserResponseType | null> = this.userService.activeUser$;

  readonly isSingIn$: Observable<boolean> = this.userService.isSignIn$;

  usersRoute: UserRoutesType = usersRoute;

  constructor(
    private readonly userService: AuthStoreService,
    private sanitizer: DomSanitizer,

    private readonly dataStoreService: CoachAudioDataStoreService,

    public readonly authService: AuthStoreService,
    private translate: TranslateService,
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.isSingIn$.pipe(map((res) => res && this.fetchAvatar())).subscribe();
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

  handleFileInput(e: any) {
    this.dataStoreService.uploadListeningFile(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgFilePath = reader.result as string;
      };
    }
  }

  fetchAvatar() {
    this.dataStoreService.downloadAvatar();
    this.dataStoreService.imgData$
      .pipe(
        map((blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(<Blob>blob);
          if (reader.result) {
            reader.onload = () => {
              this.imgFilePath = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
            };
          }
        }),
      )
      .subscribe();
  }
}
