import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  catergorias: string[] = ['A', 'B', 'C', 'D', 'E', 'Senior', 'fem'];
  collapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
