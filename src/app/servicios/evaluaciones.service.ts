import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { param } from 'jquery';
import { EvaluacionModelo } from '../modelos/evaluacion.modelo';





@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {

  private url = GlobalConstants.apiUrlBackend;



  
  constructor( private http: HttpClient ) { }


  crearEvaluacion( evaluaciones: EvaluacionModelo ) {

    return this.http.post(`${ this.url }/evaluacion`, evaluaciones);

  }


}
