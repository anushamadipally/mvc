import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    mobilenumber: new FormControl('',[Validators.required,Validators.minLength(10),
    ]),
     })
   
    
     reactiveuser()
     {
     console.log(this.reactiveForm.value)
   
     }
     get userName():FormControl
     {
       return this.reactiveForm.get('userName') as FormControl
     }
     get password():FormControl
     {
       return this.reactiveForm.get('password') as FormControl
     }
     
     get email():FormControl
     {
       return this.reactiveForm.get('email') as FormControl
     }
    
     get mobilenumber():FormControl
     {
       return this.reactiveForm.get('mobilenumber') as FormControl
     }
   
   
   
     ngOnInit(): void {
     }
     
   
   }
   
