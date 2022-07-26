import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-costumer-login',
  templateUrl: './costumer-login.component.html',
  styleUrls: ['./costumer-login.component.css']
})
export class CostumerLoginComponent implements OnInit {
  cusloginform: FormGroup;
  constructor(public fb: FormBuilder) {
    this.cusloginform = fb.group({
      username: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required]],
    });
   }

  ngOnInit(): void {
  }
  customer(){
    let data = {
      username: this.cusloginform.get('username')?.value,
      password: this.cusloginform.get('password')?.value,
    }
    console.log('data',data)
  }


}
