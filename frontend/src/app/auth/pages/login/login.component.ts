import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServicesService } from '../../auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private fb:FormBuilder,private router:Router,private authService:AuthServicesService) { }


  miFormulario:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })


  login(){
    const {email,password} = this.miFormulario.value;


    this.authService.login(email,password).subscribe(ok => {
        
        if(ok===true){
          this.router.navigateByUrl('carta/listado');
        }else{
          console.log(ok)
          Swal.fire('Error','ok','error')
        }
    })
  }

 


}
