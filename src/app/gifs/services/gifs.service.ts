import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'iJpOuwNeZbyzieTEb9haPpKKevAcL9aa';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];

  public resultados: Gifs[] =[];

  constructor(private http: HttpClient ){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; //? Renderizar local storage
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []; //? Renderizar local storage

    // if(localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!)
    // }
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial)); //? Metodo de guardar en local storage
    }


    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    console.log(params.toString())

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params }).subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })
   
  }
}
