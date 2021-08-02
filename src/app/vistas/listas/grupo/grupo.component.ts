import { Component, OnInit } from '@angular/core';

import { GrupoService } from '../../../servicios/grupo.service';
import { GrupoModelo } from '../../../modelos/grupo.modelo';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  grupo: GrupoModelo = new GrupoModelo();


  
  cargando = false;


  constructor(private grupoService: GrupoService) { this.ngOnInit}

  ngOnInit(): void {

   this.getGrupo();
   
  }

  getGrupo(){



    this.grupoService.getGrupo(1)
        .subscribe( (response: GrupoModelo) => {  
          this.grupo = response
        });
  }

 

}
