import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { param } from 'jquery';
import { EscalaevaluacionModelo } from '../modelos/escalaevaluacion.modelo';



@Injectable({
  providedIn: 'root'
})
export class EscalaevaluacionService {

  private url = GlobalConstants.apiUrlBackend;



  
  constructor( private http: HttpClient ) { }

  getEscalaEvaluacion() {
    return this.http.get(`${ this.url }/escalaevaluacion`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }
  

  private crearArreglo( EscalaEvaluacionObj: object ) {

    const escalaevaluaciones: EscalaevaluacionModelo[] = [];

    Object.keys( EscalaEvaluacionObj ).forEach( key => {

      const escalaevaluacion: EscalaevaluacionModelo = EscalaEvaluacionObj[key];
      escalaevaluaciones.push( escalaevaluacion );
    });

    return escalaevaluaciones;

  }


}

