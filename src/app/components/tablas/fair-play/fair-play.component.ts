import { Component, OnInit, Input } from '@angular/core';
import { IFairPlay } from 'src/app/models/fairplay.interface';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-fair-play',
  templateUrl: './fair-play.component.html',
  styleUrls: []
})
export class FairPlayComponent implements OnInit {

  @Input() categoria: string;
  fairPlays: IFairPlay[];

  constructor(private provService: ProvidersService) { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes) {
    if (this.categoria !== undefined) {
      this.fairPlays = this.provService.getFairPlays(this.categoria);

      if (this.fairPlays !== undefined) {
        // Ordena el arreglo por puntos
        this.fairPlays.sort((a, b) => b.fp_Rojas - a.fp_Rojas);
      }
    }
  }

  ngOnInit() {
  }

}
