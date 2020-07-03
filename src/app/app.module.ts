import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


>>>>>>> 7b99cdde28c941d0aaa4b9c1ee210f81dc641533
import { AppComponent } from './app.component';
import { PosicionesComponent } from './tablas/posiciones/posiciones.component';
import { GoleadoresComponent } from './tablas/goleadores/goleadores.component';
import { FairPlayComponent } from './tablas/fair-play/fair-play.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FixtureComponent } from './componentes/fixture/fixture.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { NuevoFixtureComponent } from './components/administracion/nuevo-fixture/nuevo-fixture.component';
import { PartidoComponent } from './components/administracion/partido/partido.component';
import { FechaNuevaComponent } from './components/administracion/fecha-nueva/fecha-nueva.component';
import { PlanillaInscripcionComponent } from './components/planilla-inscripcion/planilla-inscripcion.component';
import { FooterComponent } from './shared/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    NgbModule,
    FormsModule
>>>>>>> 7b99cdde28c941d0aaa4b9c1ee210f81dc641533
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
