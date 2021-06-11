import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import{Observable, of} from 'rxjs'
import { environment } from '../../environments/environment.prod';
import { AuthResponse, Usuario } from '../interfaces/Auth';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private baseUrl: string = environment.baseUrl;
  private _user:Usuario;
  constructor(private http:HttpClient,private router:Router) { }
  get Usuario(){
    return {...this._user};
  }

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

    console.log("cabeceras",headers);

    return this.http.post<AuthResponse>(url,headers).pipe(
      
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

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }

  validarToken(){
    const url = `${this.baseUrl}users/token?`;
    const headers = new HttpHeaders().set('x-token',localStorage.getItem('token') || '');
    console.log('hola',url,headers);
    return this.http.get<AuthResponse>(url,{headers}).pipe(
      map(resp => {
        console.log(resp.token);
        localStorage.setItem('token',resp.token!)
        this._user = {
          nombre:resp.nombre!,
          uid:resp.uid!
        }
        return resp.ok
      }),
      catchError(er => of(false))
    );
  }


}
