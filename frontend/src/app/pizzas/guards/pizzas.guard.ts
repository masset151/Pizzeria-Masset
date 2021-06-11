import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthServicesService } from '../../auth/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class PizzasGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthServicesService, private router:Router){}
  canActivate(): Observable<boolean> | boolean{
    return this.authService.validarToken().pipe(
      tap(valid=>{
        if(!valid){
          Swal.fire('Acceso Denegado','Inice sesion para entrar en la pagina');
          this.router.navigateByUrl('/auth')
        }
      })
    );
  }
  canLoad(): Observable<boolean> | boolean{
    return this.authService.validarToken().pipe(
      tap(valid=>{
        if(!valid){
          Swal.fire('Acceso Denegado','Inice sesion para entrar en la pagina');
          this.router.navigateByUrl('/auth')
        }
      })
    );
  }
}
