import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  fechas:string[] =["1","2","3","4","5","6","7","8","9","10"] 
  constructor() { }

  ngOnInit() {
  }

}
