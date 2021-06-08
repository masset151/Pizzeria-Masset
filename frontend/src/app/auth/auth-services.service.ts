import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{Observable, of} from 'rxjs'
import { environment } from '../../environments/environment.prod';
import { AuthResponse, Usuario } from '../interfaces/Auth';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private baseUrl:string = environment.baseUrl;
  private _user:Usuario;
  constructor(private http:HttpClient,private router:Router) { }

  login(email:string, password:string){
    const url = `${this.baseUrl}users/login`;
    const headers = {email,password};

    return this.http.post<AuthResponse>(url,{email,password}).pipe(
      
      tap(res => {
        console.log(res)
        if(res.ok){
          console.log(headers);
          localStorage.setItem('token',res.token!)
         this._user = {
           nombre:res.nombre!,
           uid:res.uid!
         }
         console.log(this._user)
        }
      }),
      map(res => res.ok),
      catchError(err => of(err))
    );
  }

  registro(nombre:string,email:string,password:string){
    const url = `${this.baseUrl}users/new`;
    const headers = {nombre,email,password};

    return this.http.post<AuthResponse>(url,{headers});

  }


}
