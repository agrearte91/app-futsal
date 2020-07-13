import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { PosicionesComponent } from './components/tablas/posiciones/posiciones.component';
import { GoleadoresComponent } from './components/tablas/goleadores/goleadores.component';
import { FairPlayComponent } from './components/tablas/fair-play/fair-play.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { NuevoFixtureComponent } from './components/administracion/nuevo-fixture/nuevo-fixture.component';
import { PartidoComponent } from './components/administracion/partido/partido.component';
import { FechaNuevaComponent } from './components/administracion/fecha-nueva/fecha-nueva.component';
import { PlanillaInscripcionComponent } from './components/planilla-inscripcion/planilla-inscripcion.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AltasComponent } from './components/altas/altas.component';
import { ACategoriaComponent } from './components/acategoria/acategoria.component';

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
    FechaNuevaComponent,
    PlanillaInscripcionComponent,
    FooterComponent,
    HomeComponent,
    AltasComponent,
    ACategoriaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
