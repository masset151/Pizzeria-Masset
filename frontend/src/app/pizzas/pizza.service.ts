import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizzeria } from '../interfaces/pizza.interafces';
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
    const url = `${this.baseUrl}pizzas`
    return this.http.get<Pizzeria[]>(url)
  }

  agregarPizzas(pizza:Pizzeria):Observable<Pizzeria>{
    const url = `${this.baseUrl}pizzas`
    return this.http.post<Pizzeria>(url,pizza)
  }


}
