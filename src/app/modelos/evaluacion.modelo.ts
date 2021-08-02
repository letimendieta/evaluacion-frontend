import { GrupoEvaluacionModelo } from "./grupoevaluacion.modelo";
import { PersonaModelo } from "./persona.modelo";

export class EvaluacionModelo {
    idevaluacion:number;
    calificacion:number;
    finalizado:string;
    gruposevaluacion: GrupoEvaluacionModelo = new GrupoEvaluacionModelo();
    personas: PersonaModelo = new PersonaModelo();
    personasp: PersonaModelo = new PersonaModelo();


  
  
  
    constructor() {
            
        }
  
  
  
  }
  