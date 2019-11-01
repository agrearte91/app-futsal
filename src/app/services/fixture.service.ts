import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  
  private fixture: any[] = [
      {'fecha':[
        { 'local':'Absolut Fc',
          'visitante':'Kawabonga',
          'detalle':'23:20'
        },
        {
          'local':'Villa Muten',
          'visitante':'Proyecto de Equipo',
          'detalle':'postergado'
        },
        {
          'local':'Real Coholicos',
          'visitante':'200 de Paleta',
          'detalle':'Postergado'
        },
        {
          'local':"Barrileta Cosmico",
          'visitante':'Los Amigos de tu Hna',
          'detalle':'postergado'
        },
        {
          'local':'Brujas Fc',
          'visitante':'Manzana de Newton',
          'detalle':'20:00'
        }
      ],
      "categoria": "B"
    },
    {'fecha':[
      { 'local':'Absolut Fc',
        'visitante':'200 de paleta',
        'detalle':''
      },
      {
        'local':'Villa Muten',
        'visitante':'Los Amigos de tu Hna',
        'detalle':''
      },
      {
        'local':'Real Coholicos',
        'visitante':'Manzana de Newton',
        'detalle':''
      },
      {
        'local':"Barrileta Cosmico",
        'visitante':'Kawabonga',
        'detalle':''
      },
      {
        'local':'Brujas',
        'visitante':'Proyecto de Equipo',
        'detalle':''
      }
    ],
    "categoria":"B"
  },
  {'fecha':[
    { 'local':'Absolut Fc',
      'visitante':'Kawabonga',
      'detalle':'23:20'
    },
    {
      'local':'Villa Muten',
      'visitante':'Proyecto de Equipo',
      'detalle':'postergado'
    },
    {
      'local':'Real Coholicos',
      'visitante':'200 de Paleta',
      'detalle':'Postergado'
    },
    {
      'local':"Barrileta Cosmico",
      'visitante':'Los Amigos de tu Hna',
      'detalle':'postergado'
    },
    {
      'local':'Absolut Fc',
      'visitante':'Kawabonga',
      'detalle':'20:00'
    }
  ],
  "categoria":"B"
},{'fecha':[
  { 'local':'Absolut Fc',
    'visitante':'Kawabonga',
    'detalle':'23:20'
  },
  {
    'local':'Villa Muten',
    'visitante':'Proyecto de Equipo',
    'detalle':'postergado'
  },
  {
    'local':'Real Coholicos',
    'visitante':'200 de Paleta',
    'detalle':'Postergado'
  },
  {
    'local':"Barrileta Cosmico",
    'visitante':'Los Amigos de tu Hna',
    'detalle':'postergado'
  },
  {
    'local':'Absolut Fc',
    'visitante':'Kawabonga',
    'detalle':'20:00'
  }
],
"categoria":"B"
}
    ]
  constructor() {
   }

   getFechas(categoria:string):any[]{
     let fechas:any[] = new Array();
     let contador = this.fixture.length;
     for (let i=0; i < contador; i++ ){
       console.log(this.fixture[i].categoria)
       if(this.fixture[i].categoria==categoria){
         fechas.push(this.fixture[i])
       }
     }
     return fechas;
   }


}
