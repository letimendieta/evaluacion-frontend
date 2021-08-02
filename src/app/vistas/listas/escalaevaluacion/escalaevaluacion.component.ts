import { Component, OnDestroy, OnInit } from '@angular/core';
import { EscalaevaluacionService } from '../../../servicios/escalaevaluacion.service';
import { EscalaevaluacionModelo } from '../../../modelos/escalaevaluacion.modelo';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-escalaevaluacion',
  templateUrl: './escalaevaluacion.component.html',
  styleUrls: ['./escalaevaluacion.component.css']
})
export class EscalaevaluacionComponent implements OnInit {
 escalaevaluaciones: EscalaevaluacionModelo[] = [];
  cargando = false;


  constructor( private escalaevaluacionService: EscalaevaluacionService) { }

  ngOnInit() {

    this.cargando = true;
    this.escalaevaluacionService.getEscalaEvaluacion()
      .subscribe( resp => {
        this.escalaevaluaciones = resp;
        this.cargando = false;
      });

  }

  

}
