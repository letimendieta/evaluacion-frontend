import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { Observable, of, Subject } from "rxjs";
import { param } from 'jquery';
import { PreguntaGrupoFactorModelo } from '../modelos/preguntagrupofactor.modelo';



@Injectable({
  providedIn: 'root'
})
export class PreguntaGrupoFactorService {

  private url = GlobalConstants.apiUrlBackend;



  
  constructor( private http: HttpClient ) { }

  getPreguntagrupofactor( idgrupo: string, idfactor: string  ) {
    let params = new HttpParams();
    params = params.append('idgrupo', idgrupo);
    params = params.append('idfactor', idfactor);

    return this.http.get(`${ this.url }/preguntas/grupofactor`, {params:params})
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }



  

  crearArreglo( PreguntaGrupoFactorObj: object ) {

    const preguntasgrupofactorlist: PreguntaGrupoFactorModelo[] = [];

    Object.keys( PreguntaGrupoFactorObj ).forEach( key => {

      const preguntagrupofactor: PreguntaGrupoFactorModelo = PreguntaGrupoFactorObj[key];
      preguntasgrupofactorlist.push( preguntagrupofactor );
    });

    return preguntasgrupofactorlist;

  }
  


}

