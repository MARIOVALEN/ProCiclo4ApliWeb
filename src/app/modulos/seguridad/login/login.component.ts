import { Component, OnInit } from '@angular/core';

// Importamos esta librearia para hacer la validacion en los formularios en tiempo real
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Importamos esta libreria
import * as cryptoJS from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';


//Libreria Switf Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // agregagamos dentro del constructor --> private fb: FormBuilder
  constructor(private fb: FormBuilder,
    private seguridadService: SeguridadService,
    private router: Router
    ) { }

//Validacion agregada ( Ver receta)
fgValidacion = this.fb.group({
  correo: ['', [Validators.required, Validators.email]],
  clave: ['', [Validators.required, Validators.minLength(6)]]
});

  ngOnInit(): void {
  }
//Agregamos esta funcion de identificar usuario
identificarUsuario() {
  let usuario = this.fgValidacion.controls["correo"].value;
  let clave = this.fgValidacion.controls["clave"].value;
  let claveCifrada = cryptoJS.MD5(clave).toString();

  this.seguridadService.login(usuario, claveCifrada).subscribe(
    (data: any) => {
      Swal.fire({
        title: 'Bienvenido al Sistema',
        text: 'No es solo volar, ES VOLAR MEJOR',
        imageUrl: 'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Emirates-500x313.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 1900
      }).then(() =>{
        this.seguridadService.almacenarSesion(data)
        this.router.navigate(['/index']);
      })
       },
    (error: any) => {
      console.log(error)
      Swal.fire(
        'Datos de Sesión Invalidos',
        'Contraseña o Email Errados',
        'error'
      )
          
    }
    );
  }

}
