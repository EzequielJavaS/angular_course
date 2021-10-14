import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent{
  get resultados(){
    return this.gifService.resultados; //Accedo a los resultados del servicio
  }
  //Creamos el servicio para tener acceso a los datos
  constructor( private gifService: GifsService) { }
}
