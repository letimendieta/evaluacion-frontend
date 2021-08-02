import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { param } from 'jquery';
import { RespuestaModelo } from '../modelos/respuesta.modelo';




@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  private url = GlobalConstants.apiUrlBackend;



  
  constructor( private http: HttpClient ) { }


  guardarRespuesta( respuesta: RespuestaModelo[] ) {

    return this.http.post(`${ this.url }/respuesta`, respuesta );

  }


}
