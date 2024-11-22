import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Building } from '../../model/Building';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-building-selector',
  standalone: true,
  imports: [NgFor],
  templateUrl: './building-selector.component.html',
  styleUrl: './building-selector.component.css'
})
export class BuildingSelectorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {}

  public building: string = "";
  public buildings: Array<Building> = [];

  public displayMessage : string = "Getting building names - please wait";
  public displayClass : string = "alert alert-info";


  @Output()
  public buildingChangedEvent: EventEmitter<string> = new EventEmitter<string>();

  getDataFromLocalStorage() { 
    const buildings = localStorage.getItem("buildings");
    if (buildings) {
      this.buildings = JSON.parse(buildings);
      this.displayClass="d-none";
      console.log("got the data from local storage");
    }
    else {
      this.getDataFromServer();
    }
  }

  getDataFromServer() { 
    this.dataService.getBuildings().subscribe(
      {next : data => {
        this.buildings = data;
        this.displayClass="d-none";
        localStorage.setItem("buildings", JSON.stringify(data));
        localStorage.setItem("buildings-last-fetch", new Date().toISOString());
        console.log("got the data from the server and saved it to local storage");
      }, 
      error : error => {
        this.displayMessage = "Error getting building names";
        this.displayClass = "alert alert-danger"; 
    }
    });

  }

  ngOnInit() {
    const bulidingsLastFetch = localStorage.getItem("buildings-last-fetch");
    if (bulidingsLastFetch) {
      const blf : Date = new Date(bulidingsLastFetch);
      var seconds = (new Date().getTime() - blf.getTime()) / 1000;
      console.log(`data was last fetched ${seconds} seconds ago`);
      if (seconds < 120) {
        this.getDataFromLocalStorage();
      }
      else {
        this.getDataFromServer();
      }
    } 
    else {
      this.getDataFromServer();
    }

    
    this.route.params.subscribe(params => {
      this.building = params['building'];
    });
  }

  handleChangeBuilding(event : Event) {
    this.building = (event.target as HTMLSelectElement).value;
    this.router.navigate(['/emergency', this.building]); 
    this.buildingChangedEvent.emit(this.building);
  }

}
