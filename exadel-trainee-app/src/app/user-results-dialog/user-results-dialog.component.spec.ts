import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResultsDialogComponent } from './user-results-dialog.component';

describe('UserResultsDialogComponent', () => {
  let component: UserResultsDialogComponent;
  let fixture: ComponentFixture<UserResultsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserResultsDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResultsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
