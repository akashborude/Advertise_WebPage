import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitmyadvt()
  {
    this.router.navigateByUrl('submit-my-advt');
  }

  adminlogin()
  {
    this.router.navigateByUrl('admin-login');
  }

  gotoprofile()
  {
    this.router.navigateByUrl('submit-my-advt');
  }
  submitenquiry(){
    this.router.navigateByUrl('submit-my-enquiry');
  }

}
