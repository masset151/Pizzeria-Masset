import { Pipe, PipeTransform } from '@angular/core';
import { Pizzeria } from '../../interfaces/pizza.interafces';

@Pipe({
  name: 'imagen'
})
export class ImagePipe implements PipeTransform {

  transform(pizza: Pizzeria):string {
    
    if(!pizza.image){
      return 'assets/image.jpg';
    }else{
      return pizza.image;
    }
    
    
  }

}
