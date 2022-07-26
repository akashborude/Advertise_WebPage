import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminloginform: FormGroup;
  router: any;
  constructor( public fb : FormBuilder) {
    this.adminloginform = fb.group({
      username: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  login(){
    let data = {
      username: this.adminloginform.get('username')?.value,
      password: this.adminloginform.get('password')?.value,
    }
    console.log('data',data)
  }
}
