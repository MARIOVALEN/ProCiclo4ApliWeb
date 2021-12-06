import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';

 //Librearias Agregadas para la validacion Reactiva(ver receta)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    CambiarClaveComponent,
    RecuperarClaveComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,

    //Librearias Agregadas para la validacion Reactiva(ver receta)
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
