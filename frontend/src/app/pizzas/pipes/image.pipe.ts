import { Pipe, PipeTransform } from '@angular/core';
import { Pizzeria } from '../../interfaces/pizza.interafces';

@Pipe({
  name: 'imagen'
})
export class ImagePipe implements PipeTransform {

  transform(pizza: Pizzeria):string {
    return 'asset/image.jpg';
  }

}
