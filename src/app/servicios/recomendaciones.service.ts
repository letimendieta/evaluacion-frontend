import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { param } from 'jquery';
import { RecomendacionModelo } from '../modelos/recomendacion.modelo';




@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  private url = GlobalConstants.apiUrlBackend;



  
  constructor( private http: HttpClient ) { }


  crearRecomendacion( recomendaciones: RecomendacionModelo ) {

    return this.http.post(`${ this.url }/recomendacion`, recomendaciones);

  }


}
