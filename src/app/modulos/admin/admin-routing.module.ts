import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './usuarios/create/create.component';
import { EditComponent } from './usuarios/edit/edit.component';
import { GetComponent } from './usuarios/get/get.component';

//Agregado ver receta semana 7
import { SessionGuard } from 'src/app/guards/session.guard';

const routes: Routes = [

  {
    path: 'create',
    component: CreateComponent,
  },{
    path: 'edit/:id', //Agregado el ID ver recera apartado Editar Usuario
    component: EditComponent,
    canActivate: [SessionGuard]
  },{
        path: 'get',
    component: GetComponent,
    canActivate: [SessionGuard]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
