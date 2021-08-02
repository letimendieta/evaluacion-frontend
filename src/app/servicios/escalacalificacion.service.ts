import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { param } from 'jquery';
import {EscalacalificacionModelo  } from '../modelos/escalacalificacion.modelo';
@Injectable({
  providedIn: 'root'
})
export class EscalacalificacionService {
private url = GlobalConstants.apiUrlBackend;


  constructor( private http: HttpClient ) { }

  getEscalaCalificacion() {
    return this.http.get(`${ this.url }/escalacalificacion`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }
  

  private crearArreglo( EscalaCalificacionObj: object ) {

    const escalacalificaciones: EscalacalificacionModelo[] = [];

    Object.keys( EscalaCalificacionObj ).forEach( key => {

      const escalacalificacion: EscalacalificacionModelo = EscalaCalificacionObj[key];
      escalacalificaciones.push( escalacalificacion );
    });

    return escalacalificaciones;

  }


}

