import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-my-enquiry',
  templateUrl: './submit-my-enquiry.component.html',
  styleUrls: ['./submit-my-enquiry.component.css']
})
export class SubmitMyEnquiryComponent implements OnInit {
  submitenquiry: FormGroup;
  constructor(public fb: FormBuilder) {
   this.submitenquiry = fb.group({
     name: ["",[Validators.required]],
     mob_no: ['',[Validators.required,Validators.nullValidator]],
     desc: ["",[Validators.required]],
   });
   }

  //  submitEnquiry()
  //  {
  //    console.warn(this.submitenquiry.value)
  //  }

  ngOnInit(): void {
  }
  enquiry(){
    let data = {
      name: this.submitenquiry.get('name')?.value,
      mob_no: this.submitenquiry.get('mob_no')?.value,
      desc: this.submitenquiry.get('desc')?.value,
    }
    console.log('data',data)
  }

}
