import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { DefaultComponent } from './general/layouts/default/default.component';
import { LoginComponent } from './vistas/formularios/login/login.component';
import {GrupoComponent } from './vistas/listas/grupo/grupo.component'


import {EscalaevaluacionComponent } from './vistas/listas/escalaevaluacion/escalaevaluacion.component';
import {EscalacalificacionComponent } from './vistas/listas/escalacalificacion/escalacalificacion.component';
import {PersonasComponent } from './vistas/listas/personas/personas.component'
import {PeriodoComponent } from './vistas/formularios/periodo/periodo.component'

import {PreguntasComponent } from './vistas/formularios/preguntas/preguntas.component'
import {RecomendacionesComponent } from './vistas/formularios/recomendaciones/recomendaciones.component'

import { PreguntasGuardService as guard } from 'src/app/guards/preguntas-guard.service';
import { PreguntaGrupoFactorModelo } from './modelos/preguntagrupofactor.modelo';
import { RespuestasComponent } from './vistas/formularios/respuestas/respuestas.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  {
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: 'grupos',canActivate: [guard], data: { expectedRol: ['admin', 'user'] },
      component: GrupoComponent
    },{
      path: 'grupos/:id',canActivate: [guard], data: { expectedRol: ['admin'] },
      component: GrupoComponent
    },{
      path: 'escalaevaluacion',canActivate: [guard], data: { expectedRol: ['admin', 'user'] },
      component: EscalaevaluacionComponent
    },{
      path: 'preguntas',canActivate: [guard], data: { expectedRol: ['admin', 'user'] },
      component: PreguntasComponent
    },{
      path: 'escalacalificacion',canActivate: [guard], data: { expectedRol: ['admin', 'user'] },
      component: EscalacalificacionComponent
    },{
      path: 'recomendaciones',canActivate: [guard], data: { expectedRol: ['admin', 'user'] },
      component: RecomendacionesComponent
    },{
      path: 'personas',canActivate: [guard], data: { expectedRol: ['admin', 'user'] },
      component: PersonasComponent
    },{
      path: 'periodo',canActivate: [guard], data: { expectedRol: ['admin', 'user'] },
      component: PeriodoComponent
    },{
      path: 'periodo/:id',canActivate: [guard], data: { expectedRol: ['admin'] },
      component: PeriodoComponent
    },{
      path: 'respuestas',canActivate: [guard], data: { expectedRol: ['admin', 'user'] },
      component: RespuestasComponent
    }
  ]
}];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
