import { Component, OnInit } from '@angular/core';

//Agregado ver receta Apartado Editar usuario
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModelo } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(

    //Agregado ver receta Apartado Editar usuario
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  //Agregado ver receta Apartado Editar usuario
  fgValidacion = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.minLength(6)
    ]],
    correo: ['', [Validators.required, Validators.email]],
  });

  id: string = ''

  //Agregado ver receta Apartado Editar usuario
  buscarRegistro(id: string) {
    this.usuarioService.getWithId(id).subscribe((data: UsuarioModelo) => {
      console.log(data)
      this.fgValidacion.controls["id"].setValue(id)
      this.fgValidacion.controls["nombre"].setValue(data.nombre)
      this.fgValidacion.controls["apellidos"].setValue(data.apellidos)
      this.fgValidacion.controls["correo"].setValue(data.correo)
      this.fgValidacion.controls["telefono"].setValue(data.telefono)
    })
  }

  //Agregado ver receta Apartado Editar usuario
  edit() {
    let usuario = new UsuarioModelo();
    usuario.id = this.fgValidacion.controls["id"].value;
    usuario.nombre = this.fgValidacion.controls["nombre"].value;
    usuario.apellidos = this.fgValidacion.controls["apellidos"].value;
    usuario.correo = this.fgValidacion.controls["correo"].value;
    usuario.telefono = this.fgValidacion.controls["telefono"].value;

    this.usuarioService.update(usuario).subscribe((data: UsuarioModelo) => {
      Swal.fire('Editado Correctamente!', '', 'success')
      this.router.navigate(['/admin/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }


  ngOnInit(): void {
  //Agregado ver receta Apartado Editar usuario
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);
  }

}
