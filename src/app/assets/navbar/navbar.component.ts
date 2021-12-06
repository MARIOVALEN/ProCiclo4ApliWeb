import { Component, OnInit } from '@angular/core';

//Librerias Agregadas ( ver receta)
import { Subscription } from 'rxjs';
import { UsuarioModelo } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  //Agregamos variables para guardar el inicio de sesion
  activeSession?:boolean = false;
  subs: Subscription = new Subscription();

  ngOnInit(): void {

    //Agregado de la receta
    this.subs = this.seguridadService.datosUsuarioSesion().subscribe((data: UsuarioModelo) => {
      console.log(data)
        this.activeSession = data.isLoggedIn;
    })

  }

}
