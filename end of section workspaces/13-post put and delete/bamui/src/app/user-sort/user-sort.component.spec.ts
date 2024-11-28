import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSortComponent } from './user-sort.component';

describe('UserSortComponent', () => {
  let component: UserSortComponent;
  let fixture: ComponentFixture<UserSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first name sort changes the sort type to 2', () => {
    fixture = TestBed.createComponent(UserSortComponent);
    component = fixture.componentInstance;
    const button : HTMLElement = fixture.debugElement.query(x => x.nativeElement.textContent === "Sort by firstName").nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.sortType).toEqual(2);
  });

  it('first name sort calls the handle click method with a parameter of 2', () => { 
    fixture = TestBed.createComponent(UserSortComponent);
    component = fixture.componentInstance;
    spyOn(component, 'handleClick').and.callThrough();
    const button : HTMLElement = fixture.debugElement.query(x => x.nativeElement.textContent === "Sort by firstName").nativeElement;
    button.click();
    expect(component.handleClick).toHaveBeenCalledWith(2);
  });
  
  it('first name sort calls the demo function with the parameter 2', () => {
    fixture = TestBed.createComponent(UserSortComponent);
    component = fixture.componentInstance;
    spyOn(component, 'demoFunction').and.callThrough();
    const button : HTMLElement = fixture.debugElement.query(x => x.nativeElement.textContent === "Sort by firstName").nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.demoFunction).toHaveBeenCalledWith(2);
  });

  it('first name sort calls the demo function which returns the expected value', () => {
    fixture = TestBed.createComponent(UserSortComponent);
    component = fixture.componentInstance;
    const spy = spyOn(component, 'demoFunction').and.callThrough();
    const button : HTMLElement = fixture.debugElement.query(x => x.nativeElement.textContent === "Sort by firstName").nativeElement;
    button.click();
    const returnValue : string = spy.calls.mostRecent().returnValue;
    expect(returnValue).toEqual('Sort by 2');
  });
});
