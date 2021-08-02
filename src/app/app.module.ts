import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from 'src/app/general/layouts/default/default.module';
import { LoginModule } from './vistas/formularios/login/login.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PreguntasComponent } from './vistas/formularios/preguntas/preguntas.component';
import { GrupoComponent } from './vistas/listas/grupo/grupo.component';
import { EscalaevaluacionComponent } from './vistas/listas/escalaevaluacion/escalaevaluacion.component';
import { CalificacionesComponent } from './vistas/formularios/calificaciones/calificaciones.component';
import { EscalacalificacionComponent } from './vistas/listas/escalacalificacion/escalacalificacion.component';
import { RecomendacionesComponent } from './vistas/formularios/recomendaciones/recomendaciones.component';
import { PersonasComponent } from './vistas/listas/personas/personas.component';
import { EvaluacionesComponent } from './vistas/formularios/evaluaciones/evaluaciones.component';
import { PeriodoComponent } from './vistas/formularios/periodo/periodo.component';
import { RespuestasComponent } from './vistas/formularios/respuestas/respuestas.component';


@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    GrupoComponent,
    EscalaevaluacionComponent,
    CalificacionesComponent,
    EscalacalificacionComponent,
    RecomendacionesComponent,
    PersonasComponent,
    EvaluacionesComponent,
    PeriodoComponent,
    RespuestasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FontAwesomeModule,
    NgbModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
