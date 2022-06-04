import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComida } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  // comidas: IComida [] = []

  constructor(private http: HttpClient) { }

  // getComida(){
  //   return this.comidas;
  // }

devolverComida():Observable<IComida[]>{
  return this.http.get<IComida[]>('http://localhost:3000/comida');
}

// adicionarComida(comida: IComida):Observable<IComida>{
//  return this.http.post<IComida>('http://localhost:3000/comida',comida);
// }


}
