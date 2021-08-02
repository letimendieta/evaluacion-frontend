import { EvaluacionModelo } from './evaluacion.modelo';
import { PreguntaModelo } from './pregunta.modelo';


export class RespuestaModelo {
    evaluaciones: EvaluacionModelo = new EvaluacionModelo();
    preguntas: PreguntaModelo = new PreguntaModelo();
    respuesta:number;
    observacion:string;
    notaporcentaje:number;
    notaponderada:number;
  
  
    constructor() {
            
        }
  
  
  
  }