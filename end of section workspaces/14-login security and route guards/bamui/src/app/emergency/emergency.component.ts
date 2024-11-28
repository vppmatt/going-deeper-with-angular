import { Component } from '@angular/core';
import { BuildingSelectorComponent } from './building-selector/building-selector.component';
import { WhoIsInTheBuildingComponent } from './who-is-in-the-building/who-is-in-the-building.component';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [BuildingSelectorComponent, WhoIsInTheBuildingComponent],
  templateUrl: './emergency.component.html',
  styleUrl: './emergency.component.css'
})
export class EmergencyComponent {

  public building  = "";

  handleChangeBuilding(building: string)  {
    this.building = building;
  }

}
