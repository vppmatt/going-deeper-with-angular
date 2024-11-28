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

  updateUser(user: User) : Observable<User> {
    return this.http.put<User>(`${environment.serverUrl}/api/user/${user.id}`, user);
  }

  addUser(user: User) : Observable<User> {
    return this.http.post<User>(`${environment.serverUrl}/api/user`, user);
  }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.serverUrl}/api/user`);
  }
  
  private convertData(serverAccessRecord : ServerAccessRecord[]) : AccessRecord[]  {
    return serverAccessRecord.map( item => ({...item, building: item.building.name} as AccessRecord));
  }

  getAccessRecords(date: string) : Observable<AccessRecord[]> {
    return this.http.get<ServerAccessRecord[]>(`${environment.serverUrl}/api/logs/${date}?all=true`)
    .pipe( map( data => this.convertData(data)));
  }

  whoIsInTheBuildingRightNow(building : string) : Observable<AccessRecord[]> {
    const today = new Date().toISOString().split('T')[0].replace("/","");
    return this.http.get<ServerAccessRecord[]>(`${environment.serverUrl}/api/logs/${today}?all=true`)
    .pipe( map( data => this.convertData(data)))
    .pipe( map( data => data.filter( record => record.building === building)));
  }

  getBuildings() : Observable<Building[]> {
    return this.http.get<Building[]>(`${environment.serverUrl}/api/building`);
  }

  getUser(id: number) : Observable<User> {
    return this.http.get<User>(`${environment.serverUrl}/api/user/${id}`);
  }

}

type ServerAccessRecord = AccessRecord & {building: {id : number, name: string}};