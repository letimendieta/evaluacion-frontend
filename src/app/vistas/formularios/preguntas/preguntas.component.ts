import { Component, Input, OnInit } from '@angular/core';
import { EscalaevaluacionService} from 'src/app/servicios/escalaevaluacion.service'
import { EscalacalificacionService} from 'src/app/servicios/escalacalificacion.service'
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

import { PreguntaGrupoFactorModelo} from 'src/app/modelos/preguntagrupofactor.modelo'
import { PreguntaGrupoFactorService} from 'src/app/servicios/preguntagrupofactor.service'
import { FormGroup, FormBuilder, Validators, FormArray, Form } from '@angular/forms';
import { RespuestaModelo } from 'src/app/modelos/respuesta.modelo';
import { EvaluacionModelo } from 'src/app/modelos/evaluacion.modelo';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

 

  preguntasgrupofactorlist: PreguntaGrupoFactorModelo[] = [];
  cargando = false;
  factordescripcion: string;
  porcentaje:string;
  totalnotaponderada:number;
  sumatotalnotaponderada:number;
  nivelevaluacion:number;
  editField: string;
  total:number;
  totalnota:number;
  calificacion:number;
  respuestaForm:FormGroup;
  respuestasArray: FormArray;
  crear = false;
  recomendacionForm: FormGroup;
  alertGuardar:boolean=false;
   contador = 0 ;


  constructor(  private escalaevaluacionService : EscalaevaluacionService,
    private preguntasgrupofactorService : PreguntaGrupoFactorService,private fb: FormBuilder,
    private escalacalificacionService: EscalacalificacionService)
     { 

  //  this.ngOnInit();
    this.sumatotalnotaponderada=0;
    this.respuestaForm = this.fb.group({
      
      respuestasArray: this.fb.array([ this.crearFormulario() ])
    });

  }

  ngOnInit(): void {

   
  
    this.cargando = true;
    this.preguntasgrupofactorService.getPreguntagrupofactor('5','9')
    
      .subscribe( resp => {
        this.preguntasgrupofactorlist = resp;
        this.cargando = false;
        this.factordescripcion = 'DESEMPEÑO SEGUN TAREAS'
        this.total = this.preguntasgrupofactorlist.reduce((
          acc,
          obj,
        ) => acc + (obj.peso),
        0);

      
      });

     
     

  }

 


  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;

    this.nivelevaluacion= event.target.value;


    if(this.nivelevaluacion==4){
      this.preguntasgrupofactorlist[id]["porcentaje"] = 100;
      this.totalnotaponderada = this.calcularNotaponderada(this.preguntasgrupofactorlist[id]["peso"],this.preguntasgrupofactorlist[id]["porcentaje"]);
      this.preguntasgrupofactorlist[id]["notaponderada"] =this.totalnotaponderada;
      this.sumatotalnotaponderada = this.sumatotalnotaponderada + this.totalnotaponderada ; 

    }else if(this.nivelevaluacion==3){
      this.preguntasgrupofactorlist[id]["porcentaje"] = 75;
      this.totalnotaponderada = this.calcularNotaponderada(this.preguntasgrupofactorlist[id]["peso"],this.preguntasgrupofactorlist[id]["porcentaje"]);
      this.preguntasgrupofactorlist[id]["notaponderada"] =this.totalnotaponderada;
     
      this.sumatotalnotaponderada = this.sumatotalnotaponderada + this.totalnotaponderada ; 

    }else if(this.nivelevaluacion==2){
      this.preguntasgrupofactorlist[id]["porcentaje"] = 50;
      this.totalnotaponderada = this.calcularNotaponderada(this.preguntasgrupofactorlist[id]["peso"],this.preguntasgrupofactorlist[id]["porcentaje"]);
      this.preguntasgrupofactorlist[id]["notaponderada"] =this.totalnotaponderada;
      this.sumatotalnotaponderada = this.sumatotalnotaponderada + this.totalnotaponderada ; 
     

    }else if(this.nivelevaluacion==1){
      this.preguntasgrupofactorlist[id]["porcentaje"] = 25;
      this.totalnotaponderada = this.calcularNotaponderada(this.preguntasgrupofactorlist[id]["peso"],this.preguntasgrupofactorlist[id]["porcentaje"]);
      this.preguntasgrupofactorlist[id]["notaponderada"] =this.totalnotaponderada;
    
      this.sumatotalnotaponderada = this.sumatotalnotaponderada + this.totalnotaponderada ; 

    }

 
      this.totalnota=this.sumatotalnotaponderada;

      this.calificacion = this.totalnota/2;

 

  }



  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;

    
  }

  calcularNotaponderada(peso:number, porcentaje:number){


    return (peso*porcentaje)/100;
  }

  sumaTotalNotaponderada(total:number){
    
    console.log(this.sumatotalnotaponderada);
    this.sumatotalnotaponderada += this.total;
   
    return this.sumatotalnotaponderada;
  }

  activarTextArea(id: number,  event: any) {
    this.editField = event.target.textContent;

    
  }

getValoresTabla(pregunta: PreguntaGrupoFactorModelo[]){

 console.log(this.preguntasgrupofactorlist)
  
 return this.preguntasgrupofactorlist;
  
}

guardar( ) {

  if ( this.respuestaForm.invalid ) {
    this.alertGuardar = true;
    return Object.values( this.respuestaForm.controls ).forEach( control => {

      if ( control instanceof FormGroup ) {
        Object.values( control.controls ).forEach( control => control.markAsTouched() );
      } else {
        control.markAsTouched();
      }
    });
  }
  
  Swal.fire({
    title: 'Espere',
    text: 'Guardando información',
    icon: 'info',
    allowOutsideClick: false
  });
  Swal.showLoading();

  var respuesta = new Array<RespuestaModelo>();
  var evaluacion = new EvaluacionModelo();
  evaluacion.idevaluacion= 15;

  let peticion: Observable<any>;

  respuesta = this.recomendacionForm.getRawValue();
  recomendacion.evaluaciones = evaluacion

    peticion = this.recomendacionService.crearRecomendacion( recomendacion );

  

  peticion.subscribe( response => {

    Swal.fire({
              icon: 'success',
              title: 'recomendacion',
              text: response.mensaje
            }).then( resp => {

      if ( resp.value ) {
        this.limpiar();
      }
    });
  }, e => {Swal.fire({
            icon: 'error',
            title: 'Algo salio mal',
            text: this.comunes.obtenerError(e)
          })
     }
  );
}


  crearFormulario(): FormGroup {

    return this.respuestaForm = this.fb.group({
      respuesta  : [null, [] ],
      observacion  : [null, [] ],
      notaponderada  : [null, [] ],
      notaporcentaje  : [null, [] ],
      fechaCreacion: [null, [] ],
      fechaModificacion: [null, [] ],  
    });

   // this.respuestaForm.get('idrecomendacion').disable();
    this.respuestaForm.get('fechaCreacion').disable();
    this.respuestaForm.get('fechaModificacion').disable();
    
  }



}
