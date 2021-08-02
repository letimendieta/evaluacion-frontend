import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { param } from 'jquery';
import { GrupoModelo } from '../modelos/grupo.modelo';



@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private url = GlobalConstants.apiUrlBackend;



  
  constructor( private http: HttpClient ) { }

  getGrupo( id: number ) {

    return this.http.get(`${ this.url }/grupos/${ id }`);

  }
  


}

