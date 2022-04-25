import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BEBIDA_MOCK } from 'src/app/mocks/bebida-mock';
import { Bebida } from 'src/app/models/drink.model';

@Component({
  selector: 'NGF-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.scss']
})
export class BebidaComponent implements OnInit {
  listaDeBedidas: Bebida[] = BEBIDA_MOCK;


  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get<Bebida[]>('http://localhost:3000/bebida',)
    .subscribe((resultado) => {
      this.listaDeBedidas = resultado;
    })
  }

}
