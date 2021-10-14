import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey      : string = 'RCRLGo2OZzk1tGwTi0mNkuWk3CLjEyKz';
  private servicioUrl : string = 'http://api.giphy.com/v1/gifs';
  private _historial  : string[] =  [];

  public resultados: any[]=[]; //Para guardar los resultados de la data de la llamada.

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient){
    this._historial = JSON.parse (localStorage.getItem('historial')!)||[];
    this.resultados = JSON.parse (localStorage.getItem('resultados')!)||[];
  }

  guardarGifs( query: string ){
    query = query.trim().toLowerCase();
    if( !this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
      localStorage.setItem ('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query );


    this.http.get(`${ this.servicioUrl }/search`, { params })
      .subscribe((resp:any) => {
        this.resultados = resp.data; //Guardamos los resultados de la llamada.
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      }) 
  }
}
