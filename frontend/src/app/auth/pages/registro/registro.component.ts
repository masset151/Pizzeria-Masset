import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServicesService } from '../../auth-services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private authService:AuthServicesService) { }

  miFormulario:FormGroup = this.fb.group({
    nombre:["",[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  ngOnInit(): void {
  }

  registro(){
    const {nombre,email,password} = this.miFormulario.value;

    this.authService.registro(nombre,email,password).subscribe(ok =>{
      if(ok==true){
        this.router.navigateByUrl('carta/listado');
      }else{
        Swal.fire('Error','ok','error')
      }
    })

  }

}
