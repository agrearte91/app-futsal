import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../../services/fixture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  fechas:string[] =["1","2","3","4","5","6","7","8","9","10"];
  fixture:any[]

  constructor(private route:ActivatedRoute ,private _fixtureService:FixtureService) {
    this.route.params.subscribe(params => {
      this.fixture=this._fixtureService.getFechas(params['categoria']);    
    })
    
    console.log(this.fixture)
   }
  

  ngOnInit() {
  }
  
}
