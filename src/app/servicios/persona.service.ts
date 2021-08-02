import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { map, delay } from 'rxjs/operators';
import { PersonaModelo } from '../modelos/persona.modelo';
import { PersonaDtoModelo } from '../modelos/dto/personasDto.modelo';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = GlobalConstants.apiUrlBackend;



  
  constructor( private http: HttpClient ) { }

  getPersonas() {
    return this.http.get(`${ this.url }/personas/all`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  getListaPersonasRH(descripcion:string) {

    let params = new HttpParams();
    params = params.append('descripcion', descripcion);
 


    return this.http.get(`${ this.url }/personas/lista`,{params:params})
            .pipe(
              map( this.crearArregloDto),
              delay(0)
            );
  }
  

  private crearArreglo( PersonaObj: object ) {

    const personas: PersonaModelo[] = [];

    Object.keys( PersonaObj ).forEach( key => {

      const persona: PersonaModelo = PersonaObj[key];
      personas.push( persona );
    });

    return personas;

  }

  private crearArregloDto( PersonaObj: object ) {

    const personasDto: PersonaDtoModelo[] = [];

    Object.keys( PersonaObj ).forEach( key => {

      const personaDto: PersonaDtoModelo = PersonaObj[key];
      personasDto.push( personaDto );
    });

    return personasDto;

  }


}

