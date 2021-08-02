import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComunesService } from 'src/app/servicios/comunes.service';
import { PeriodoModelo } from 'src/app/modelos/periodo.modelo';
import { Observable } from 'rxjs';
import { PeriodoService } from '../../../servicios/periodo.service';


@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent implements OnInit {
  crear = false;
  periodoForm: FormGroup;
  alertGuardar:boolean=false;

  constructor( private periodoService: PeriodoService,
               private route: ActivatedRoute,
               private comunes: ComunesService,
               private router: Router,
               private fb: FormBuilder ) { 
    this.crearFormulario();
  }              

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('idPeriodo');
    
    if ( id !== 'nuevo' ) {
      
      this.periodoService.getPeriodo( Number(id) )
        .subscribe( (resp: PeriodoModelo) => {
          this.periodoForm.patchValue(resp);
        });
    }else{
      this.crear = true;
    }
  }  

  guardar( ) {

    if ( this.periodoForm.invalid ) {
      this.alertGuardar = true;
      return Object.values( this.periodoForm.controls ).forEach( control => {

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

    var periodo = new PeriodoModelo();

    let peticion: Observable<any>;

    periodo = this.periodoForm.getRawValue();

    if ( periodo.idPeriodo ) {
      //Modificar
      //periodo.usuarioModificacion = 'admin';
      peticion = this.periodoService.actualizarPeriodo( periodo );
    } else {
      //Agregar
     // area.usuarioCreacion = 'admin';
      peticion = this.periodoService.crearPeriodo( periodo );
    }

    peticion.subscribe( response => {

      Swal.fire({
                icon: 'success',
                title: response.area.codigo,
                text: response.mensaje
              }).then( resp => {

        if ( resp.value ) {
         // if ( response.area.areaId ) {
           // this.router.navigate(['/periodo']);
        //  }else{
            this.limpiar();
        //  }
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

  limpiar(){
    this.periodoForm.reset();
   
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


  get descripcionNoValido() {
    return this.periodoForm.get('descripcion').invalid && this.periodoForm.get('descripcion').touched
  }

  crearFormulario() {

    this.periodoForm = this.fb.group({
     // idPeriodo  : [null, [] ],
      descripcion  : [null, [ Validators.required]  ],
      estado: [null, [] ],
      anho: [null, [] ],
      semestre: [null, [] ],
      fechaInicio: [null, [] ],
      fechaFin: [null, [] ],    
      fechaCreacion: [null, [] ],
      fechaModificacion: [null, [] ],    
    });

   // this.periodoForm.get('idperiodo').disable();
    this.periodoForm.get('fechaCreacion').disable();
    this.periodoForm.get('fechaModificacion').disable();
    //this.periodoForm.get('usuarioCreacion').disable();
   // this.periodoForm.get('usuarioModificacion').disable();
  }
  cerrarAlertGuardar(){
    this.alertGuardar=false;
  }

}
