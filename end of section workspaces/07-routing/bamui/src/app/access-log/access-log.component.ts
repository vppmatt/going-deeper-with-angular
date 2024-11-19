import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../model/AccessRecord';
import { NgFor } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-access-log',
  standalone: true,
  imports: [NgFor],
  templateUrl: './access-log.component.html',
  styleUrl: './access-log.component.css'
})
export class AccessLogComponent implements OnInit {

  constructor(private dataService: DataService) {}

  public date: string = "20241114";
  
  public accessLogs: Array<AccessRecord> = [];

  ngOnInit() {
    this.dataService.getAccessRecords(this.date)
      .subscribe(data => this.accessLogs = data);      
  }

}
