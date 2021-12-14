// Se crea este archiv con Comando ng generate g guards/session ( Ver Receta Semana 7)
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Agregado ver SEMANA  7 REceta
import { SeguridadService } from '../servicios/seguridad.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Agregado ver SEMANA  7 REceta
      if(this.seguridadService.isLoggedIn()){
        return true;
      }else{
        this.router.navigate(['/seguridad/login']);
        return false;
      }
  
  }

  // Agregado ver SEMANA  7 REceta
  constructor(private seguridadService: SeguridadService,
    private router: Router,
    ){}

  
}
