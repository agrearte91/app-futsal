import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GoleadoresComponent } from './app/tablas/goleadores/goleadores.component';
import { PosicionesComponent } from './app/tablas/posiciones/posiciones.component';
import { FairPlayComponent } from './app/tablas/fair-play/fair-play.component';
import { FixtureComponent } from './app/componentes/fixture/fixture.component';


export const ROUTES:  Routes  = [
    {path: 'posiciones', component: PosicionesComponent},
    {path: 'goleadores', component: GoleadoresComponent},
    {path: 'fair-play', component: FairPlayComponent},
    {path: 'fixture', component:FixtureComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'posiciones' }
]