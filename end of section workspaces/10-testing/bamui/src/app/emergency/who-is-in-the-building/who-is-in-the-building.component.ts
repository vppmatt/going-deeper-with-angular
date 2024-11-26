import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccessRecord } from '../../model/AccessRecord';
import { DataService } from '../../data.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-who-is-in-the-building',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './who-is-in-the-building.component.html',
  styleUrl: './who-is-in-the-building.component.css'
})
export class WhoIsInTheBuildingComponent implements OnChanges{

  constructor(private dataService: DataService) {}

  @Input()
  public building: string = "";
  
  public accessLogs: Array<AccessRecord> = [];

  loadDataForBuilding() {
    if (this.building) {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['building'].currentValue !== changes['building'].previousValue) { 
      this.loadDataForBuilding();
    }
  }
    
}
