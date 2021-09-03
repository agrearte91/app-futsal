import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { GoleadoresComponent } from './app/components/tablas/goleadores/goleadores.component';
import { PosicionesComponent } from './app/components/tablas/posiciones/posiciones.component';
import { FairPlayComponent } from './app/components/tablas/fair-play/fair-play.component';
import { FixtureComponent } from './app/components/fixture/fixture.component';
import { EstadisticasComponent } from './app/components/estadisticas/estadisticas.component';
import { NuevoFixtureComponent } from './app/components/administracion/nuevo-fixture/nuevo-fixture.component';
import { PlanillaInscripcionComponent } from './app/components/planilla-inscripcion/planilla-inscripcion.component';
import { HomeComponent } from './app/components/home/home.component';


export const ROUTES: Routes = [
    { path: 'posiciones', component: PosicionesComponent },
    { path: 'posiciones/:categoria', component: PosicionesComponent },
    { path: 'goleadores', component: GoleadoresComponent },
    { path: 'goleadores/:categoria', component: GoleadoresComponent },
    { path: 'fair-play', component: FairPlayComponent },
    { path: 'fair-play/:categoria', component: FairPlayComponent },
    { path: 'fixture', component: FixtureComponent },
    { path: 'fixture/:categoria', component: FixtureComponent },
    { path: 'estadisticas/:categoria', component: EstadisticasComponent },
    { path: 'inscripcion', component: PlanillaInscripcionComponent },
    { path: 'home', component: HomeComponent },

    { path: 'administracion/cargar-fixture/:categoria', component: NuevoFixtureComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
