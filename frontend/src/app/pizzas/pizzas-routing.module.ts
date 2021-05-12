import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pages/pizzas/pizzas.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'pizzas',
        component:PizzasComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
