import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../model/AccessRecord';
import { NgFor } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { User } from '../model/User';

@Component({
  selector: 'app-access-log',
  standalone: true,
  imports: [NgFor, AgGridAngular],
  templateUrl: './access-log.component.html',
  styleUrl: './access-log.component.css'
})
export class AccessLogComponent implements OnInit {

  constructor(private dataService: DataService) {}

  public date: string = "20241114";
  
  public accessLogs: Array<AccessRecord> = [];


  public columnDefs : Array<ColDef> = [
    {field : "id"},
    {field : "user",
      headerName: "Name",
      filter: true,
      valueGetter : function(params : any) {
        return `${params.data.user.firstname} ${params.data.user.surname}`;
      } 
    },
    {field : "time", filter: true,},
    {field : "building", filter: true,},
    {field : "status",
      valueGetter: function(params : any) {
        return params.data.status ? "in" : "out";
    }
  }
  ];

  ngOnInit() {
    this.dataService.getAccessRecords(this.date)
      .subscribe(data => this.accessLogs = data);      
  }

}

