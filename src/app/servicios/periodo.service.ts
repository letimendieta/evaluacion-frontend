import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { param } from 'jquery';
import { PeriodoModelo } from '../modelos/periodo.modelo';




@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  private url = GlobalConstants.apiUrlBackend;



  
  constructor( private http: HttpClient ) { }


  crearPeriodo( periodo: PeriodoModelo ) {

    return this.http.post(`${ this.url }/periodo`, periodo);

  }

  actualizarPeriodo( periodo: PeriodoModelo ) {

    const PeriodoTemp = {
      ...periodo
    };

    return this.http.put(`${ this.url }/periodo/`, periodo);


  }

  getPeriodo( id: number ) {

    return this.http.get(`${ this.url }/periodo/${ id }`);

  }

}
