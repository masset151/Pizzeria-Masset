import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PizzaTarjetaComponent } from './components/pizza-tarjeta/pizza-tarjeta.component';
import { VerPizzasComponent } from './pages/ver-pizzas/ver-pizzas.component';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { CrearPizzaComponent } from './pages/crear-pizza/crear-pizza.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [PizzaTarjetaComponent,
    CrearPizzaComponent,
    VerPizzasComponent,
    PizzasComponent, 
    CrearPizzaComponent, 
    ComprarComponent,
    ImagePipe],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class PizzasModule { }
