import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './model/User';
import { environment } from '../environments/environment';
import { AccessRecord } from './model/AccessRecord';
import { Building } from './model/Building';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log("Using environment serverUrl: ", environment.serverUrl);
   }

  getUsers() : Observable<Array<User>> {
    return this.http.get<Array<User>>(`${environment.serverUrl}/api/user`);
  }
  
  private convertData(serverAccessRecord : ServerAccessRecord[]) : AccessRecord[]  {
    return serverAccessRecord.map( item => ({...item, building: item.building.name} as AccessRecord));
  }

  getAccessRecords(date: string) : Observable<Array<AccessRecord>> {
    return this.http.get<Array<ServerAccessRecord>>(`${environment.serverUrl}/api/logs/${date}?all=true`)
    .pipe( map( data => this.convertData(data)));
  }

  whoIsInTheBuildingRightNow(building : string) : Observable<Array<AccessRecord>> {
    const today = new Date().toISOString().split('T')[0].replace("/","");
    return this.http.get<Array<ServerAccessRecord>>(`${environment.serverUrl}/api/logs/${today}?all=true`)
    .pipe( map( data => this.convertData(data)))
    .pipe( map( data => data.filter( record => record.building === building)));
  }

  getBuildings() : Observable<Array<Building>> {
    return this.http.get<Array<Building>>(`${environment.serverUrl}/api/building`);
  }

}

type ServerAccessRecord = AccessRecord & {building: {id : number, name: string}};