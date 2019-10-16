import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PosicionesComponent } from './tablas/posiciones/posiciones.component';
import { GoleadoresComponent } from './tablas/goleadores/goleadores.component';
import { FairPlayComponent } from './tablas/fair-play/fair-play.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';
import { NavbarComponent } from './compartido/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PosicionesComponent,
    GoleadoresComponent,
    FairPlayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
