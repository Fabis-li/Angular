import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Menu {
  titulo: string;
  imagem: string;
  path: string;
}


@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  listadeOpcoesDeMenu: Menu[] = [
    {
      titulo: "Comida",
      imagem: "assets/comida.jpg",
      path: "/comida",
    },
    {
      titulo: "Bebida",
      imagem: "assets/refri.jpg",
      path: "/bebida",
    }
  ]


  constructor() { }

  ngOnInit(): void {
    
  }

}
