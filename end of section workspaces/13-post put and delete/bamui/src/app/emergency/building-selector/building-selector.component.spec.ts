import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSelectorComponent } from './building-selector.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('BuildingSelectorComponent', () => {
  let component: BuildingSelectorComponent;
  let fixture: ComponentFixture<BuildingSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingSelectorComponent],
      providers: [provideRouter([]),provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
