import { Injectable } from '@angular/core';
import { IBebida } from '../models/bebida.model';
import { IComida } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  ItensPedidoLista: IComida[] | IBebida[] = [];

  constructor() { }

  buscarTotalItensPedido(): number {
    return this.ItensPedidoLista.length;
  }

  adicionarItemPedido(item: IComida|IBebida) {
    this.ItensPedidoLista.push(item);
  
  }

  adicionarItensPedido(item: IComida|IBebida, quantidade: number) {
    const itens = Array(quantidade).fill(item);
   this.ItensPedidoLista.push(...itens)
  }

  limparPedido() {
    this.ItensPedidoLista = [];
  }
  removerItemPedido(id: number){
   const itemIdex =  this.ItensPedidoLista.findIndex((item)=> item.id === id)

   this.ItensPedidoLista.splice(itemIdex,1);
   
  }

  buscarItensPedido():IComida [] | IBebida [] {
    return this.ItensPedidoLista;
  }

}
