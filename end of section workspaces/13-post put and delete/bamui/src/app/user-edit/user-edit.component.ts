import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private formBuilder : FormBuilder, private router: Router) {}

  userId : number | null = null;

  newUser = false;
  saving = false;
  message = "";

//@ts-expect-error('form group is set up in ngOnInit')
  userForm : FormGroup;
 
  ngOnInit() { 
    this.userForm = this.formBuilder.group({
      id: '',
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      surname: ['', [Validators.required, Validators.minLength(4)]]
    });

    if (this.route.snapshot.url[0].path === "user-add") {
      this.newUser = true;
      return;
    }
    else {
        this.route.params.subscribe(params => {
        this.userId = +params['id'];
        this.dataService.getUser(+params['id']).subscribe(user => {
          this.userForm?.patchValue({ id : "" + user.id, firstname: user.firstname, surname: user.surname });
        });
      });
    }
  }
  

  handleSubmit() {
    this.saving = true;
    this.message = "saving... please wait";

    if (this.newUser) {
      this.dataService.addUser(this.userForm.value).subscribe(
        {next : user => {
        this.saving = false;
        this.router.navigate(['/user', user.id]);
      }, error : error => {
        this.saving = false;
        this.message = "Error saving user : " + error.error.message;  
      }})}
    else {
          this.dataService.updateUser(this.userForm.value).subscribe( 
        {next : () => {
        this.saving = false;
        this.message = "User saved";
      }, error : error => {
        this.saving = false;
        this.message = "Error saving user : " + error.error.message;
      }});
  }
  
}
}
