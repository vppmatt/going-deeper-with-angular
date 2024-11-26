import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLogComponent } from './access-log.component';
import { provideHttpClient } from '@angular/common/http';
import { AccessRecord } from '../model/AccessRecord';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';

describe('AccessLogComponent', () => {
  let component: AccessLogComponent;
  let fixture: ComponentFixture<AccessLogComponent>;

  const dummyData : Array<AccessRecord> = [
    {id: 1, user: {id: 11, firstname: 'test1', surname: 'test1'}, time: '20241114', building: 'test1', status: true},
    {id: 2, user: {id: 12, firstname: 'test2', surname: 'test2'}, time: '20241114', building: 'test2', status: true},
    {id: 3, user: {id: 13, firstname: 'test3', surname: 'test3'}, time: '20241114', building: 'test3', status: true},
  ];

  beforeEach(async () => {
    const fakeFunction = (param: string) : Observable<Array<AccessRecord>> => of(dummyData); 

    const mockDataService = jasmine.createSpyObj('DataService', ['getAccessRecords']);
    mockDataService.getAccessRecords.and.callFake(fakeFunction);

    const mockDataServiceProvider = { provide: DataService, useValue: mockDataService };

    await TestBed.configureTestingModule({
      imports: [AccessLogComponent],
      providers: [provideHttpClient(), mockDataServiceProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check loaded data is stored in accessLogs when component is loaded', () => {       
    expect(component.accessLogs).toEqual(dummyData);
  });
});
