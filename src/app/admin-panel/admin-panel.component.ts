import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
  
})
export class AdminPanelComponent implements OnInit {
  updatedetails:FormGroup;
  add_category:FormGroup;
  router:any;
  constructor( public fb : FormBuilder) {
    this.updatedetails = fb.group({
      days: [''],
      rate: [''],
      advt_type:[""]
    })
    this.add_category = fb.group({
      desc:[""]
    })
   }

  ngOnInit(): void {
  }
  update(){
    let data = {
      days: this.updatedetails.get('days')?.value,
      rate: this.updatedetails.get('rate')?.value,
      advt_type: this.updatedetails?.get('advt_type')?.value,
    }
    console.log('data',data)
  }

  add(){
    desc:this.add_category.get('desc')?.value
  }
  gotoadminloginpage(){
    this.router.navigateByUrl('admin-login')
  }

}
