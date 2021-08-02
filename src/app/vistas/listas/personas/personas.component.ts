import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../servicios/persona.service';
import { PersonaDtoModelo } from '../../../modelos/dto/personasDto.modelo';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personasDto: PersonaDtoModelo[] = [];
  cargando = false;


  constructor(    private  personaService: PersonaService) { }

  ngOnInit() {

    this.cargando = true;
    this.personaService.getListaPersonasRH('VICE')
    
      .subscribe( resp => {
        
        this.personasDto = resp;
        this.cargando = false;
      });

  }

}
