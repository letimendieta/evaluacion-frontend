import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecomendacionesService } from 'src/app/servicios/recomendaciones.service';
import { ComunesService } from 'src/app/servicios/comunes.service';
import { RecomendacionModelo } from 'src/app/modelos/recomendacion.modelo';
import { Observable } from 'rxjs';
import { EvaluacionModelo } from 'src/app/modelos/evaluacion.modelo';



@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
  crear = false;
  recomendacionForm: FormGroup;
  alertGuardar:boolean=false;
   contador = 0 ;
   editField: string;

  constructor(private recomendacionService : RecomendacionesService, 
    private route: ActivatedRoute,
    private comunes: ComunesService,
    private router: Router,
    private fb: FormBuilder) {

    this.crearFormulario();
   }

  ngOnInit() {
    const idrecomendacion = this.route.snapshot.paramMap.get('idrecomendacion');

  
      this.crear = true;
    
    
  }

  guardar( ) {

    if ( this.recomendacionForm.invalid ) {
      this.alertGuardar = true;
      return Object.values( this.recomendacionForm.controls ).forEach( control => {

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

    var recomendacion = new RecomendacionModelo();
    var evaluacion = new EvaluacionModelo();
    evaluacion.idevaluacion= 15;

    let peticion: Observable<any>;

    recomendacion = this.recomendacionForm.getRawValue();
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

  obtenerError(e : any){
    var mensaje = "Error indefinido ";
      if(e.error){
        if(e.error.mensaje){
          mensaje = e.error.mensaje;
        }
        if(e.error.message){
          mensaje = e.error.message;
        }
        if(e.error.errors){
          mensaje = mensaje + ' ' + e.error.errors[0];
        }
        if(e.error.error){
          mensaje = mensaje + ' ' + e.error.error;
        }
      }
      if(e.message){
        mensaje = mensaje + ' ' + e.message;
      }
    return mensaje;  
  }

  get accionmejoraNoValido() {
    return this.recomendacionForm.get('accionmejora').invalid && this.recomendacionForm.get('accionmejora').touched
  }

  get accionpropuestaNoValido() {
    return this.recomendacionForm.get('accionpropuesta').invalid && this.recomendacionForm.get('accionpropuesta').touched
  }

  get observacionNoValido() {
    return this.recomendacionForm.get('observacion').invalid && this.recomendacionForm.get('observacion').touched
  }
 
  crearFormulario() {

    this.recomendacionForm = this.fb.group({
      idrecomendacion  : [null, [] ],
      accionmejora  : [null, Validators.compose([Validators.required, Validators.maxLength(150)])  ],
      accionpropuesta  : [null, [ Validators.required]  ],
      observacion  : [null, [ Validators.required]  ],
      fechaCreacion: [null, [] ],
      fechaModificacion: [null, [] ],  
    });

    this.recomendacionForm.get('idrecomendacion').disable();
    this.recomendacionForm.get('fechaCreacion').disable();
    this.recomendacionForm.get('fechaModificacion').disable();
    
  }
  cerrarAlertGuardar(){
    this.alertGuardar=false;
  }

  limpiar(){
    this.recomendacionForm.reset();

  }
  onKey(event){
    this.contador = event.target.value.length
   }

 
}
