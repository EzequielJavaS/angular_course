import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor( private gifsService: GifsService){} //Inyectamos el servicio
  search(){
    const valor = this.txtBuscar.nativeElement.value;
    if ( valor.trim().length === 0) {
      return;
    }
    this.gifsService.guardarGifs( valor ); //Llamamos a la función del servicio.
    this.txtBuscar.nativeElement.value = '';
  }
}
