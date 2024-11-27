import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBulkEditComponent } from './user-bulk-edit.component';

describe('UserBulkEditComponent', () => {
  let component: UserBulkEditComponent;
  let fixture: ComponentFixture<UserBulkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBulkEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBulkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
