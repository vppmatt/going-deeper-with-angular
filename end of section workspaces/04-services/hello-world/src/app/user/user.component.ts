import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnChanges {

  @Input()
  name: string = "";

  @Input()
  role : string = "";

  constructor() { 
    console.log("user constructor", this.name, this.role);
  }
  ngOnInit(): void {
    console.log("user on init", this.name, this.role);
    this.name = this.name;
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("user on changes", this.name, this.role, changes);
  }

}
