import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas/pizzas.component';
import { BuscarPizzaComponent } from './buscar-pizza/buscar-pizza.component';
import { VerPizzasComponent } from './ver-pizzas/ver-pizzas.component';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [PizzasComponent, BuscarPizzaComponent, VerPizzasComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ]
  
})
export class PizzasModule { }
