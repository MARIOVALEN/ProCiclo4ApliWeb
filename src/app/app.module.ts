import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './assets/navbar/navbar.component';
import { FooterComponent } from './assets/footer/footer.component';
import { IndexComponent } from './assets/index/index.component';
import { ErrorComponent } from './assets/error/error.component';

//Se agrega libreria que nos permite conectar con nuestra API
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


   //Se agrega libreria que nos permite conectar con nuestra API    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
