import { Component, OnInit } from '@angular/core';
import { AccessRecord } from '../model/AccessRecord';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-who-is-in-the-building',
  standalone: true,
  imports: [NgFor],
  templateUrl: './who-is-in-the-building.component.html',
  styleUrl: './who-is-in-the-building.component.css'
})
export class WhoIsInTheBuildingComponent implements OnInit{

  constructor(private dataService: DataService) {}

  public building: string = "Adel Square";
  
  public accessLogs: Array<AccessRecord> = [];

  ngOnInit() {
    this.dataService.whoIsInTheBuildingRightNow(this.building)
      .subscribe(data => {
        const lastRecordForEachUser : Map<number, AccessRecord> = new Map<number, AccessRecord>();
        data.forEach( record => {
          lastRecordForEachUser.set(record.user.id, record);
        });
        this.accessLogs = Array.from(lastRecordForEachUser.values())
        .filter( record => record.status === true);
      });      
  }

}
