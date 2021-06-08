import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styles: [`
  li{
    cursor:pointer;
  }
  `]
})
export class MenuComponent {

  menu: Menu[] = [
    {
      ruta:"carta/listado",
      nombre:'Nuestras Pizzas'
    },
    {
      ruta:"carta/crear",
      nombre:"Crea tu propia Pizza"
    },
    {
      ruta:"carta/carrito",
      nombre:"carrito"

    }
  ];

  constructor() { }

}
