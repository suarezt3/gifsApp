import { Component,  } from '@angular/core';
import { Gifs } from '../interface/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {

  get resultados(): Gifs[] {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService ) { }



}
