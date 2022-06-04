import { Component, OnInit } from '@angular/core';
import { IComida } from 'src/app/models/comida.model';
import { ComidaService } from 'src/app/services/comida.service';
import { PedidoService } from 'src/app/services/pedido.service';


@Component({
  selector: 'NGF-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  listaComida: IComida[] = [];  


  constructor(
    private comidaService: ComidaService,
    private pedidoService: PedidoService
    ) { }

  ngOnInit(): void {
    this.comidaService.devolverComida()
      .subscribe((resultado:IComida[])=>{
        this.listaComida = resultado
      })
  }

  adicionarComida(comida: IComida) {
    this.pedidoService.adicionarItemPedido(comida);
  }

  adicionarComidaComQuantidade(itemComQuantidade: any){
    this.pedidoService.adicionarItensPedido(itemComQuantidade.item, itemComQuantidade.quantidade);
  }
}

