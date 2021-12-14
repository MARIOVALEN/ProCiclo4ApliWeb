import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RutaModelo } from '../modelos/ruta.model';
import { SeguridadService } from './seguridad.service';



@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) {
      
      this.token = this.seguridadService.getToken();
    }

    url = "http://localhost:3000"
token: string = ''

//Metodo registrar
store(ruta: RutaModelo): Observable<RutaModelo> {
  return this.http.post<RutaModelo>(`${this.url}/rutas`, {
    tiempo_estimado: ruta.tiempo_estimado,
    origen: ruta.origen,
    destino: ruta.destino
  });
}

//Método para Listar todos las rutas
getAll(): Observable<RutaModelo[]>{
  return this.http.get<RutaModelo[]>(`${this.url}/rutas`, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
     })
  })
}
//Método para Actualizar una Ruta:
update(ruta: RutaModelo): Observable<RutaModelo> {
      return this.http.patch<RutaModelo>(`${this.url}/rutas/${ruta.id}`, {
        tiempo_estimado: ruta.tiempo_estimado,
        origen: ruta.origen,
        destino: ruta.destino
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
//Método para Eliminar una Ruta: 
delete(id: string): Observable<RutaModelo[]>{
      return this.http.delete<RutaModelo[]>(`${this.url}/rutas/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
//Metodo para Consultar un unico Aeropuerto: 
getWithId(id: string): Observable<RutaModelo>{
      return this.http.get<RutaModelo>(`${this.url}/rutas/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }




}// Fin Clase
