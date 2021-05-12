import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPizzaComponent } from './pizzas/pages/crear-pizza/crear-pizza.component';
import { PizzasComponent } from './pizzas/pages/pizzas/pizzas.component';
import { PizzasModule } from './pizzas/pizzas.module';


const routes: Routes = [

  {
    path:'carta',
    component:PizzasComponent
  },
  {
    path:'crear',
    component:CrearPizzaComponent
  },
  {path:'**',
   redirectTo:'carta'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
