import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VueloModelo } from 'src/app/modelos/vuelo.model';
import {RutaModelo } from 'src/app/modelos/ruta.model';
import { VueloService } from 'src/app/servicios/vuelo.service';
import { RutaService } from 'src/app/servicios/ruta.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private vueloService: VueloService,
    private rutaService: RutaService,
    private router: Router) { }

    listadoRutas: RutaModelo[] = []

    fgValidacion = this.fb.group({
      fecha_inicio: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]],
      asientos_vendidos: ['', [Validators.required]],
      nombre_piloto: ['', [Validators.required]],
      ruta: ['', [Validators.required]],
    });
  

  store(){
    
    let vuelo = new VueloModelo();
    vuelo.fecha_inicio = this.fgValidacion.controls["fecha_inicio"].value;
    //new Date(this.fgValidacion.controls["fecha_inicio"].value).toISOString()
    vuelo.hora_inicio = this.fgValidacion.controls["hora_inicio"].value;
    vuelo.fecha_fin= this.fgValidacion.controls["fecha_fin"].value;
    //new Date(this.fgValidacion.controls["fecha_fin"].value).toISOString()
    vuelo.hora_fin = this.fgValidacion.controls["hora_fin"].value; 
    vuelo.asientos_vendidos = this.fgValidacion.controls["asientos_vendidos"].value; 
    vuelo.nombre_piloto = this.fgValidacion.controls["nombre_piloto"].value; 
    vuelo.ruta = this.fgValidacion.controls["ruta"].value; 

    this.vueloService.store(vuelo).subscribe((data: VueloModelo)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/vuelos/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }

  getAllRutas(){
    this.rutaService.getAll().subscribe((data: RutaModelo[]) => {
      this.listadoRutas = data
      console.log(data)
    })
  }
  ngOnInit(): void {
    this.getAllRutas()
  }

}
