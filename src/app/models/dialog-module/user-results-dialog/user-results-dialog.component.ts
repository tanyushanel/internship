import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TestStoreService } from 'src/app/services/store/test-store.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { user } from '../../../constants/mock-user-data';
import { TestResult } from '../../../interfaces/test';
import { GetHrUser } from '../../../interfaces/user.interfaces';
import { CoachAudioDataStoreService } from '../../../services/store/coach-audio-data-store.service';

@Component({
  selector: 'app-user-results-dialog',
  templateUrl: './user-results-dialog.component.html',
  styleUrls: ['./user-results-dialog.component.scss'],
})
export class UserResultsDialogComponent implements OnInit {
  @Input() user!: GetHrUser;

  results$: Observable<TestResult[] | undefined> = this.testStoreService.testResults$;

  isClicked = false;

  results: TestResult[] = [];

  imgFilePath: SafeUrl | undefined;

  get testsCount() {
    return this.results.length;
  }

  constructor(
    private testStoreService: TestStoreService,
    public dialogRef: MatDialogRef<UserResultsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GetHrUser,
    private readonly audioData: CoachAudioDataStoreService,
    private sanitizer: DomSanitizer,
  ) {}

  async ngOnInit() {
    this.user = { ...user, ...this.data };
    const blob = await this.audioData.fetchUrlAudio(this.user.avatar);
    const reader = new FileReader();
    reader.readAsDataURL(<Blob>blob);
    reader.onload = () => {
      this.imgFilePath = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
  }

  onAssignBtnClick(): void {
    this.isClicked = true;
  }
}
