import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CostumerLoginComponent } from './costumer-login/costumer-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubmitMyAdvtComponent } from './submit-my-advt/submit-my-advt.component';
import { SubmitMyEnquiryComponent } from './submit-my-enquiry/submit-my-enquiry.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home-page', pathMatch:'full'
  },
  {
    component: AdminLoginComponent,
    path:'admin-login'
  },
  {
    component: CostumerLoginComponent,
    path:'custumer-login'
  },
  {
    component: HomePageComponent,
    path:'home-page'
  },
  {
    component: RegistrationComponent,
    path: 'registration'
  },
  {
    component: SubmitMyAdvtComponent,
    path:'submit-my-advt'
  },
  {
    component: SubmitMyEnquiryComponent,
    path:'submit-my-enquiry'
  },
  {
    component:HomePageComponent,
    path:'share-details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
