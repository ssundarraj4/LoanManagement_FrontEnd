import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SigninComponent } from './signin/signin.component';
import { LoanComponent } from './loan/loan.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoanSearchComponent } from './loan-search/loan-search.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';


const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signout', component: HomeComponent},
  {path: 'loanRequest', component: LoanComponent},
  {path: 'loanSearch', component: LoanSearchComponent}, 
  {path: 'updateloan/:loanNo', component: UpdateLoanComponent},
  {path: 'viewloan/:loanNo', component: ViewLoanComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
