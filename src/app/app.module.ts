import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { NuevoFixtureComponent } from './components/administracion/nuevo-fixture/nuevo-fixture.component';
import { PartidoComponent } from './components/administracion/partido/partido.component';
import { FechaNuevaComponent } from './components/administracion/fecha-nueva/fecha-nueva.component';

@NgModule({
  declarations: [
    AppComponent,
    PosicionesComponent,
    GoleadoresComponent,
    FairPlayComponent,
    NavbarComponent,
    FixtureComponent,
    EstadisticasComponent,
    ResultadosComponent,
    NuevoFixtureComponent,
    PartidoComponent,
    FechaNuevaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
