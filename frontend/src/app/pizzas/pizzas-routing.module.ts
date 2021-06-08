import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pages/pizzas/pizzas.component';
import { PizzasModule } from './pizzas.module';
import { VerPizzasComponent } from './pages/ver-pizzas/ver-pizzas.component';
import { CrearPizzaComponent } from './pages/crear-pizza/crear-pizza.component';
import { ComprarComponent } from './pages/comprar/comprar.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'listado',
        component:PizzasComponent
      },
      {
        path:'crear',
        component:CrearPizzaComponent
      },
      {
        path:'pizza/:id',
        component:VerPizzasComponent
      },

       {
         path:'comprar/:id',
         component:ComprarComponent
       },
      {
        path:'**',
        redirectTo:'listado'
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
