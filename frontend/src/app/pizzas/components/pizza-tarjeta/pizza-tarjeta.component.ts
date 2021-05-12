import { Component, Input, OnInit } from '@angular/core';
import { Pizzeria } from 'src/app/interfaces/pizza.interafces';

@Component({
  selector: 'app-pizza-tarjeta',
  templateUrl: './pizza-tarjeta.component.html',
  styleUrls: ['./pizza-tarjeta.component.css']
})
export class PizzaTarjetaComponent{
  @Input() pizza!:Pizzeria

  
  
}
