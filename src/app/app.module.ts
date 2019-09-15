
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 

import { AuthguardService } from './authguard.service';

 
import { HttpClientModule } from "@angular/common/http";

import { HttpModule } from "@angular/http"; 

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup,ReactiveFormsModule } from '@angular/Forms'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
	  ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PostComponent },
      { path: 'form', component: FormComponent, canActivate: [AuthguardService]  },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
