import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  menu: Menu[] = [
    {
      ruta:"/carta",
      nombre:'Nuestras Pizzas'
    },
    {
      ruta:"/crear",
      nombre:"Crea tu propia Pizza"
    }
  ];

  constructor() { }

}
