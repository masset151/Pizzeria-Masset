import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pizzeria } from 'src/app/interfaces/pizza.interafces';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor(private fb:FormBuilder,private activateRouter:ActivatedRoute,private pizzaService:PizzaService) { }
  pizza!:Pizzeria
  pagado:boolean = false
  ngOnInit(): void {
    this.activateRouter.params.pipe(
      switchMap( ({ id }) => this.pizzaService.getPizzaNombre(id) )
    ).subscribe(pizza => this.pizza = pizza)
  }



  miFormulario:FormGroup = this.fb.group({
    nombre:["",Validators.required],
    numero:["",Validators.required],
    caducidad:["",Validators.required],
    cvv:["",[Validators.required,Validators.minLength(3),Validators.maxLength(3)]]
  })

  pagar(){
    console.log(this.miFormulario)
    this.pagado = true;
  }

}
