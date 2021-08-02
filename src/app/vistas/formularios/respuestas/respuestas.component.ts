import { Component, Input, OnInit } from '@angular/core';
import { EscalaevaluacionService} from 'src/app/servicios/escalaevaluacion.service'
import { EscalacalificacionService} from 'src/app/servicios/escalacalificacion.service'

import { PreguntaGrupoFactorModelo} from 'src/app/modelos/preguntagrupofactor.modelo'
import { PreguntaGrupoFactorService} from 'src/app/servicios/preguntagrupofactor.service'
import { FormGroup, FormBuilder, Validators, FormArray, Form, FormControl } from '@angular/forms';
import { Observable, of, Subject } from "rxjs";

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

 

  preguntasgrupofactorlist: PreguntaGrupoFactorModelo[] = [];
  preguntasgrupofactorlistForm: PreguntaGrupoFactorModelo[] = [];
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
  private subject = new Subject<PreguntaGrupoFactorModelo>();




  constructor(  private escalaevaluacionService : EscalaevaluacionService,
    private preguntasgrupofactorService : PreguntaGrupoFactorService,private fb: FormBuilder,
    private escalacalificacionService: EscalacalificacionService)
     { 
      const arryOfAuxGroup = this.preguntasgrupofactorService.crearArreglo(item => {
        return this.createauxGroup(
          item.descripcion,
          item.TempSensor,
          item.SpaceAvg,
          item.SwitchStatus
        );
      });
      this.respuestaForm = this.fb.group({
        aux: this.fb.array(arryOfAuxGroup)
      });



     }


     createauxGroup(description, tempSensor, spaceAvg, switchStatus) {
      return this.fb.group({
        description: [description, Validators.maxLength(50)],
        tempSensor: [tempSensor],
        spaceAvg: [spaceAvg],
        switchStatus: [switchStatus]
      });
    }
  ngOnInit(): void {
    
    

    
 
  }

    
  
    get names(): FormArray {
      return this.respuestaForm.get('names') as FormArray;
    }
    guardar(): void {
      for (let i = 0; i < this.names.length; i++) {
        console.log(this.names.at(i).value);
      }
    }
    addNameField() {
      this.names.push(new FormControl('', Validators.required));
    }
  
    deleteNameField(index: number) {
      if (this.names.length !== 1) {
        this.names.removeAt(index);
      }
      console.log(this.names.length);
    }

    getLista() {
      return this.preguntasgrupofactorService.getPreguntagrupofactor('5','9');
    }
  

    crearFormulario() {
     
    


     
     
       

      
      
     
      
      
    }




}