
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup,FormControl,Validators,AbstractControl, ValidationErrors } from '@angular/Forms';
import {  LoginService } from '../login.service';
import {  MyForm } from './Myform';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor ( private _myservice :LoginService){}

  ngOnInit() {
  }

  public loginform = new FormGroup({
		password: new FormControl("", [
								Validators.required,
								Validators.minLength(5)
								]
							)
								,
		email: new FormControl("", [
								Validators.required,
								Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
								]
							)
														
	})
	
	//Get Name Getters
	
	get password() {
		return this.loginform.get("password");
	}

	// Getters
	get email() {
		return this.loginform.get("email");
	}


	login() {
    
		let reservationsadd = {
			password: this.loginform.value.password,
			email: this.loginform.value.email
		};
			
		  
		this._myservice.login(reservationsadd).subscribe(result => {
			
				//this.reservation.push(result.reservationn);
			});
	
			
		  // this.reservationform.reset(); 
		   
	   }
	

}


