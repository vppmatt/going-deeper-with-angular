import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Route } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute,
    private formBuilder : FormBuilder) {}

  userId : number = 0;

  // userForm = new FormGroup({
  //   id: new FormControl(''),
  //   firstname: new FormControl(''),
  //   surname: new FormControl('')
  // });

  // @ts-ignore
  userForm : FormGroup;
 
  ngOnInit() { 
    this.userForm = this.formBuilder.group({
      id: '',
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      surname: ['', [Validators.required, Validators.minLength(4)]]
    });

    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.dataService.getUser(+params['id']).subscribe(user => {
        this.userForm?.patchValue({ id : "" + user.id, firstname: user.firstname, surname: user.surname });
      });
    });
  }
  

  handleSubmit() {
    console.log(this.userForm.value);
  }
 
}
