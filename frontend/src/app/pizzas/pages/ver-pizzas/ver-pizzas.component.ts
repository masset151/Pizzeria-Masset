import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Pizzeria } from '../../../interfaces/pizza.interafces';
import { PizzaService } from '../../pizza.service';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators'
declare var paypal;
@Component({
  selector: 'app-ver-pizzas',
  templateUrl: './ver-pizzas.component.html',
  styleUrls: ['./ver-pizzas.component.css']
})
export class VerPizzasComponent implements OnInit {
   pizza!:Pizzeria
   
   
   
  constructor(private pizzaService:PizzaService,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    
   
    
    this.activateRouter.params.pipe(
      switchMap( ({ id }) => this.pizzaService.getPizzaNombre(id) )
    ).subscribe(pizza => this.pizza = pizza)

   
  }
  comprar(pizza:Pizzeria){
    
  }

}
