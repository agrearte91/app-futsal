import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PosicionesComponent } from './tablas/posiciones/posiciones.component';
import { GoleadoresComponent } from './tablas/goleadores/goleadores.component';
import { FairPlayComponent } from './tablas/fair-play/fair-play.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';
import { NavbarComponent } from './compartido/navbar/navbar.component';
import { FixtureComponent } from './componentes/fixture/fixture.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    PosicionesComponent,
    GoleadoresComponent,
    FairPlayComponent,
    NavbarComponent,
    FixtureComponent,
    EstadisticasComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
