import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SigninComponent } from './signin/signin.component';
import { LoanComponent } from './loan/loan.component';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegistrationService } from './registration.service';
import { HttpClientModule } from '@angular/common/http';
import { LoanSearchComponent } from './loan-search/loan-search.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeadersComponent } from './headers/headers.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AboutusComponent,
    SigninComponent,
    LoanComponent,
    HomeComponent,
    RegisterComponent,
    LoanSearchComponent,
    UpdateLoanComponent,
    ViewLoanComponent,
    HeadersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule
  ],

  providers: [
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
