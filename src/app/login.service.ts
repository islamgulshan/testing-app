
import { Injectable } from '@angular/core';
import { MyForm } from "./login/Myform";
import { JwtModule } from '@auth0/angular-jwt';
import{ Http, Headers } from '@angular/http';
import { map } from  'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor( private _http : Http) { }

  login(credintcail){    
    var header = new Headers();
    header.append("Content-Type", "application/json");
    return this._http
      .post("https://boiling-anchorage-33456.herokuapp.com/login", credintcail)
      .pipe(map(result => {
        localStorage.setItem('access_token','dada');
        return true;
      }) )
    }
 
  }
