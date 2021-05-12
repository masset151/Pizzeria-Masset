import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, GuardsCheckStart, Router } from '@angular/router';
import {Pizzeria} from 'src/app/interfaces/pizza.interafces'
import { PizzaService } from '../../pizza.service';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-pizza',
  templateUrl: './crear-pizza.component.html',
  styleUrls: ['./crear-pizza.component.css']
})
export class CrearPizzaComponent {

  pizza:Pizzeria = {
    nombre:"",
    ingredientes:"",
    image: "",
    precio: 9.99
  }

  constructor(private pizzaService:PizzaService,private activateRoute: ActivatedRoute,private router: Router){}


    guardar(){
      if(this.pizza.nombre.trim().length==0){
        return;
      }
        this.pizzaService.agregarPizzas(this.pizza).subscribe(res =>
          console.log(res))
      
    }

}


