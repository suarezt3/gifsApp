import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //? Con signo de admiracion forzamos a TypeScript que confie en nosotros

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifsService.buscarGifs(valor); //? Agregamos el valor al servicio.
    this.txtBuscar.nativeElement.value = ''; //? De esta manera borramos el valor del campo del input

  }
}
