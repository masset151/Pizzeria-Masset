import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizzeria } from '../interfaces/heroes.interafces';
import { Observable } from 'rxjs';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  ObtenerPizzas():Observable<Pizzeria[]>{
    return this.http.get<Pizzeria[]>(`http://localhost:3000/api/pizzas`)
  }


}
