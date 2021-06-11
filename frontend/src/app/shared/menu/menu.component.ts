import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';
import { AuthModule } from '../../auth/auth.module';





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
  ];

  constructor() { }

  

  

}
