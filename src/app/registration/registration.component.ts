import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration: FormGroup;
  router: any;
  constructor(public fb: FormBuilder, router: Router) {
    this.registration = fb.group({
      name: ["",[Validators.required]],
      startdate: [''],
      email: ['',[Validators.required,Validators.email]],
      address: [""],
      aadhar_no: ['',[Validators.required,Validators.nullValidator]],
      mob_no: ['',[Validators.required,Validators.nullValidator]],
      pass: [""],
    })
   }

  ngOnInit(): void {
  }

  register(){
    let data = {
      name: this.registration.get('name')?.value,
      startdate: this.registration.get('startdate')?.value,
      email:this.registration.get('email')?.value,
      address:this.registration.get('address')?.value,
      aadhar_no:this.registration.get('aadhar_no')?.value,
      mob_no: this.registration.get('mob_no')?.value,
      pass:this.registration.get('pass')?.value,
    }
    console.log('data',data)
  }
  // submit(){
  //   this.router.navigateByUrl('submit-registration-details')
  // }

}
