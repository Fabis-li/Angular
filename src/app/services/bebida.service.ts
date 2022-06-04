import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBebida } from '../models/bebida.model';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

// bebidas:IBebida[] = [
//     {
//     id: 100,
//     titulo:"Bebida 1",        
//     imagem: "assets/refri.jpg",
//     descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
//     preco: "R$ 7,00",
//     },
//     {
//     id:101,
//     titulo:"Bebida 2",        
//     imagem: "assets/agua.webp",
//     descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
//     preco: "R$ 3,00",
//     },
//   ];

  constructor(private http: HttpClient ) {}


  // getBebidas() {
  //   return this.bebidas;
  // }

  devolverBebida():Observable<IBebida[]> {
   return this.http.get<IBebida[]>('http://localhost:3000/bebida');    
  }

  // adicionarBebidas(bebida: IBebida):Observable<IBebida>{
  //   return this.http
  //   .post<IBebida>('http://localhost:3000/bebida', bebida);
  // }
}
