import { GrupoModelo } from "./grupo.modelo";
import { PeriodoModelo } from "./periodo.modelo";

export class GrupoEvaluacionModelo {
    idgrupoevaluacion:number;
    idperiodo:number;
    idgrupo:number;
    descripcion:string;
    periodos: PeriodoModelo = new PeriodoModelo();
    grupo: GrupoModelo = new GrupoModelo();

  
  
  
    constructor() {
            
        }
  
  
  
  }
  