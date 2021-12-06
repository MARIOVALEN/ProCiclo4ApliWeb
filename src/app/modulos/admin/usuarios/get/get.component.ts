import { Component, OnInit } from '@angular/core';

// Agregado ver receta semana 6
import { UsuarioModelo } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(
    //Agregado ver receta Semana 6
    private usuarioService: UsuarioService) { }

  //Agregado ver receta semana 6
  listado: UsuarioModelo[] = []

  //Agregado ver receta semana 6
  getAll() {
    this.usuarioService.getAll().subscribe((data: UsuarioModelo[]) => {
      this.listado = data
      console.log(data)
    })
  }
  //Agregado ver receta semana 6
   delete(id?: any){
    console.log(id)


    Swal.fire({
      title: '¿Esta seguro de Eliminar el Registro?',
      text: "Una vez elminado, No podrá revertir este cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, Continuar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(id).subscribe((data: any) => {
          Swal.fire( 'Borrado!',
          'El registro seleccionado ha sido borrado',
          'success')
          this.getAll();
        })
      }
    })
  }

  ngOnInit(): void {
    this.getAll()
  }

}
