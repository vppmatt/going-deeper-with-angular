import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyComponent } from './emergency.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('EmergencyComponent', () => {
  let component: EmergencyComponent;
  let fixture: ComponentFixture<EmergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyComponent],
      providers: [provideRouter([]), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
