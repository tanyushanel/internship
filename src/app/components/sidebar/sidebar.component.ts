import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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
  isOpen = true;

  imgFilePath: string | SafeUrl | undefined;

  @ViewChild('img') img: ElementRef | undefined;

  readonly user$: Observable<UserResponseType | null> = this.userService.activeUser$;

  readonly isSingIn$: Observable<boolean> = this.userService.isSignIn$;

  usersRoute: UserRoutesType = usersRoute;

  constructor(
    private readonly userService: AuthStoreService,
    public readonly authService: AuthStoreService,
    private sanitizer: DomSanitizer,

    private readonly dataStoreService: CoachAudioDataStoreService,
  ) {}

  getWidth() {
    return this.isOpen ? 'width:14%;' : 'width:4%;';
  }

  toggleShow() {
    this.isOpen = !this.isOpen;
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
          reader.onload = () => {
            this.imgFilePath = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
          };
        }),
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.isSingIn$.pipe(map((res) => res && this.fetchAvatar())).subscribe();
  }
}
