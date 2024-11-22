import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadErrorComponent } from './load-error.component';

describe('LoadErrorComponent', () => {
  let component: LoadErrorComponent;
  let fixture: ComponentFixture<LoadErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
