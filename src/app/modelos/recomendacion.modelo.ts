import { EvaluacionModelo } from './evaluacion.modelo';


export class RecomendacionModelo {
    idrecomendacion:number;
    accionmejora:string;
    accionpropuesta:string;
    observacion:string;
    evaluaciones: EvaluacionModelo = new EvaluacionModelo();
    fechaCreacion: Date;
    fechaModificacion: Date;
  
  
  
    constructor() {
            
        }
  
  
  
  }
  