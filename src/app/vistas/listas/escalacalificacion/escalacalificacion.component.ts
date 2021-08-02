import { Component, OnDestroy,Input, OnInit } from '@angular/core';
import { EscalacalificacionService } from '../../../servicios/escalacalificacion.service';
import { EscalacalificacionModelo } from '../../../modelos/escalacalificacion.modelo';
import Swal from 'sweetalert2';
import { RecomendacionesService } from '../../../servicios/recomendaciones.service';


@Component({
  selector: 'app-escalacalificacion',
  templateUrl: './escalacalificacion.component.html',
  styleUrls: ['./escalacalificacion.component.css']
})
export class EscalacalificacionComponent implements OnInit {
 escalacalificaciones: EscalacalificacionModelo[] = [];
  cargando = false;
  @Input() calificacion: number;


  constructor( private recomendacionesService : RecomendacionesService,
    private escalacalificacionService: EscalacalificacionService) { }

  ngOnInit() {

    this.cargando = true;
    this.escalacalificacionService.getEscalaCalificacion()
      .subscribe( resp => {
        this.escalacalificaciones = resp;
        this.cargando = false;
      });

  }



  

}