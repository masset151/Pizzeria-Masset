import { Component, OnInit } from '@angular/core';
import { Pizzeria } from 'src/app/interfaces/pizza.interafces';
import { PizzaService } from '../../pizza.service';
import { AuthServicesService } from '../../../auth/auth-services.service';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {


pizza:Pizzeria[] = []

  

  ngOnInit(): void {

    this.pizzaService.ObtenerPizzas()
    .subscribe(pizza => this.pizza = pizza)
  }

  constructor(private pizzaService:PizzaService,private authService:AuthServicesService) { }

  logout(){
    return this.authService.logout();
  }

  

}
