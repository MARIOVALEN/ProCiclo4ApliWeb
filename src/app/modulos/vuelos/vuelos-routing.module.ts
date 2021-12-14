import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';


//Agregado ver semana 7
import { SessionGuard } from 'src/app/guards/session.guard';

const routes: Routes = [

  {
    path: 'create',
    component: CreateComponent,
    canActivate: [SessionGuard]
  },{
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [SessionGuard]
  },{
    path: 'get',
    component: GetComponent,
    canActivate: [SessionGuard]
  },
  //Cuando solo le colocan la ruta hasta aeropuertos el lo lleva al GET
  {
    path: '',
    redirectTo: 'get'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VuelosRoutingModule { }
