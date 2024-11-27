import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../model/User';
import { NgFor } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-bulk-edit',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './user-bulk-edit.component.html',
  styleUrl: './user-bulk-edit.component.css'
})
export class UserBulkEditComponent implements OnInit {

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {}

  userData: User[] = [];
    
  //@ts-expect-error('form group is set up in ngOnInit')
  mainForm : FormGroup;
  
  get userForms() : FormArray {
    return this.mainForm.get('userForms') as FormArray;
  }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({userForms : this.formBuilder.array([])});

    this.dataService.getUsers()
    .pipe(map(data => data.slice(0,10)))
    .subscribe(data => {
      this.userData = data;
      this.userData.forEach(user => {
        const userForm: FormGroup = this.formBuilder.group({
          id: user.id,
          firstname: user.firstname,
          surname: user.surname
        });

        this.userForms.push(userForm);
      });
    });
  }

  handleSubmit() {
    console.log(this.userForms.value);
  }

  addUser() {
    this.userForms.push(this.formBuilder.group({ id: null,
      firstname: "",
      surname: "" }));
  }

  removeUser(i: number) { 
    this.userForms.removeAt(i);
  }


}
