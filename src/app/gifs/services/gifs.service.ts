import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'RCRLGo2OZzk1tGwTi0mNkuWk3CLjEyKz';
  private _historial: string[]=[];

  // TODO: Cambiar any por su tipo
  public resultados: any[]=[]; //Para guardar los resultados de la data de la llamada.

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient){}

  guardarGifs( query: string ){
    query = query.trim().toLowerCase();
    if( !this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

    this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=RCRLGo2OZzk1tGwTi0mNkuWk3CLjEyKz&q=${ query }&limit=10&lang=es`)
      .subscribe((resp:any) => {
        console.log(resp.data);
        this.resultados = resp.data; //Guardamos los resultados de la llamada.
      }) 
  }
}
