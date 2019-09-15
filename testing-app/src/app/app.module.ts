
import { NgModule } from '@angular/core';
//import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
//import { ReservationComponent } from './reservation/reservation.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup,ReactiveFormsModule } from '@angular/Forms'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    PostComponent,
    LoginComponent
  //  ReservationComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,HttpClientModule,
	ReactiveFormsModule,
	 HttpModule,
    RouterModule.forRoot([
      { path: '', component: PostComponent },
      { path: 'form', component: FormComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
