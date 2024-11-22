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

  @Output()
  public buildingChangedEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.dataService.getBuildings().subscribe(data => this.buildings = data);
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
