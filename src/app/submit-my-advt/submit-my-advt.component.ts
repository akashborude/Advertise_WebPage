import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-my-advt',
  templateUrl: './submit-my-advt.component.html',
  styleUrls: ['./submit-my-advt.component.css']
})
export class SubmitMyAdvtComponent implements OnInit {
  submitmyadvt: FormGroup;
  submitmyadvt_1: FormGroup;
  router: any;
  constructor(public fb: FormBuilder, router: Router) {
    this.submitmyadvt = fb.group({
      loc: ["",[Validators.required]],
      category:["",[Validators.required]],
      desc: ["",[Validators.required]],
      mob_no: ['',[Validators.required,Validators.nullValidator]],
      startdate: [""],
      amount: ['',[Validators.required,Validators.nullValidator]],
      days:[''],
    })

    this.submitmyadvt_1 = fb.group({
      loc: ["",[Validators.required]],
      category:["",[Validators.required]],
      mob_no: ['',[Validators.required,Validators.nullValidator]],
      startdate: [""],
      amount: ['',[Validators.required,Validators.nullValidator]],
      days:['',[Validators.required]],
      upload:['',[Validators.required]],
    })
   }


   
  ngOnInit(): void {
  }
  submit(){
    let data = {
      loc: this.submitmyadvt.get('loc')?.value,
      category: this.submitmyadvt.get('category')?.value,
      desc:this.submitmyadvt.get('desc')?.value,
      mob_no:this.submitmyadvt.get('mob_no')?.value,
      startdate:this.submitmyadvt.get('startdate')?.value,
      amount: this.submitmyadvt.get('amount')?.value,
      days:this.submitmyadvt.get('days')?.value,
    }
    console.log('data',data)
  }

  submit_display(){
    let data = {
      loc: this.submitmyadvt_1.get('loc')?.value,
      category: this.submitmyadvt_1.get('category')?.value,
      mob_no:this.submitmyadvt_1.get('mob_no')?.value,
      startdate:this.submitmyadvt_1.get('startdate')?.value,
      amount: this.submitmyadvt_1.get('amount')?.value,
      days:this.submitmyadvt_1.get('days')?.value,
      upload:this.submitmyadvt_1.get('upload')?.value,
    }
    console.log('data',data)
  }


}
