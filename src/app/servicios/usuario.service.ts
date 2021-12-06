import { Injectable } from '@angular/core';

//Agredado Ver receta Semana 6
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModelo } from '../modelos/usuario.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    //Agredado Ver receta Semana 6
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    //Agredado Ver receta Semana 6
    this.token = this.seguridadService.getToken();
  }
  //Agredado Ver receta Semana 6
  url = "http://localhost:3000"
  token: string = ''

  //Método para Crear un Usuario Agredado Ver receta Semana 6:
  store(usuario: UsuarioModelo): Observable<UsuarioModelo> {
    return this.http.post<UsuarioModelo>(`${this.url}/usuarios`, {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      telefono: usuario.telefono,
      correo: usuario.correo
    });
  }
  //Método para Listar todos los Usuarios Agredado Ver receta Semana 6:
  getAll(): Observable<UsuarioModelo[]>{
        return this.http.get<UsuarioModelo[]>(`${this.url}/usuarios`, {
          headers: new HttpHeaders({
            "Authorization": `Bearer ${this.token}`
          })
        })
      }
 //Método para Actualizar un Usuario Agredado Ver receta Semana 6:
  update(usuario: UsuarioModelo): Observable<UsuarioModelo> {
        return this.http.patch<UsuarioModelo>(`${this.url}/usuarios/${usuario.id}`, {
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
          telefono: usuario.telefono,
          correo: usuario.correo
        }, {
          headers: new HttpHeaders({
            "Authorization": `Bearer ${this.token}`
          })
        });
      }
  //Método para Eliminar un Usuario Agredado Ver receta Semana 6: 
  delete(id: string): Observable<UsuarioModelo[]>{
        return this.http.delete<UsuarioModelo[]>(`${this.url}/usuarios/${id}`, {
          headers: new HttpHeaders({
            "Authorization": `Bearer ${this.token}`
          })
        })
      }
  //Metodo para Consultar un unico Usuario Agredado Ver receta Semana 6: 
  getWithId(id: string): Observable<UsuarioModelo>{
        return this.http.get<UsuarioModelo>(`${this.url}/usuarios/${id}`,{
          headers: new HttpHeaders({
            "Authorization": `Bearer ${this.token}`
          })
        })
      }
  

}
