import { FormControl, FormArray } from '@angular/forms';

export function validarEsFacultad(control: FormControl): {[s: string]: boolean}{
  
    let facultades = ['informatica','ingenieria','medicina']
    
    if(facultades.indexOf(control.value) == -1){
      return {
        validaresfacultad: true
      }
    }
    return null
}

export function dniUnico(control: FormControl): {[s: string]: boolean} {
  let dni = control.value;
  //console.log(dni)
  let jugadores = this.controls['jugadores'].value
  //console.log(jugadores)
  for (let i=0 ; i < jugadores.length; i++ ){
    //console.log(dni)
    if(dni === jugadores[i].dni){
      return { dniunico: true}
    }
  }
  return null

}

export function noigual( control: FormControl): {[s:string]:boolean}{
  console.log(this.controls['dni'].value)
  if(control.value === this.controls['dni'].value){
    return{
      noigual:true
    }
  }
  return null;

}


