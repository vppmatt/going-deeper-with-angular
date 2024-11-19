import { Component, OnInit } from '@angular/core';
import { AccessRecord } from '../model/AccessRecord';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from '../model/Building';

@Component({
  selector: 'app-who-is-in-the-building',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './who-is-in-the-building.component.html',
  styleUrl: './who-is-in-the-building.component.css'
})
export class WhoIsInTheBuildingComponent implements OnInit{

  constructor(private dataService: DataService, private route :ActivatedRoute, private router: Router) {}

  public building: string = "Adel Square";
  
  public accessLogs: Array<AccessRecord> = [];

  public buildings: Array<Building> = [];

  handleChangeBuilding(event : Event) {
    this.building = (event.target as HTMLSelectElement).value;
    //this.loadDataForBuilding(); note that it will get loaded by the navigate process
    this.router.navigate(['/emergency', this.building]);
    
  }

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

  ngOnInit() {
    this.dataService.getBuildings().subscribe(data => this.buildings = data);
    this.route.params.subscribe(params => {
      this.building = params['building'];
      this.loadDataForBuilding();
    });
  }
    
}
