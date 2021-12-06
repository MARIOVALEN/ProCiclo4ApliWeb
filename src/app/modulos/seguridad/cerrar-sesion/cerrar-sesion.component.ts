import { Component, OnInit } from '@angular/core';

//Se importan librerias ( ver receta apartado cerrar sesion)
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  //Se agrega dentro de los parentesis del Constrcutor lo siguiente:
  constructor(private seguridadService: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {

    //Agregado Ver receta
    this.seguridadService.eliminarSesion();
    this.router.navigate(['/seguridad/login']);
  }

}
