import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { COMIDA_MOCK } from 'src/app/mocks/comida-mock';
import { Comida } from 'src/app/models/food.model';


@Component({
  selector: 'NGF-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  listaComida: Comida[] = COMIDA_MOCK;
    

  


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get< Comida[]>('http://localhost:3000/comida',)
    .subscribe((resultado) => {
      this.listaComida = resultado;
    })
  }

}
