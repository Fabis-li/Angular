import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LISTA_BEBIDA_MOCK } from 'src/app/mocks/bebida-mock';
import { IBebida } from 'src/app/models/bebida.model';
import { BebidaService } from 'src/app/services/bebida.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'NGF-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.scss']
})
export class BebidaComponent implements OnInit {
  listaBedida: IBebida[] = LISTA_BEBIDA_MOCK;


  constructor(
    private bebidaService:BebidaService,
    private pedidoService: PedidoService
    ){}

  ngOnInit(): void {
   this.buscarBebidas();
  }

  buscarBebidas(){
    this.bebidaService.devolverBebida()
    .subscribe((resultado) => {
      this.listaBedida = resultado;
    });
  }

  adicionarBebidas() {
   const bebida = {
      id: this.listaBedida.length +1,
      titulo:`Bebida ${this.listaBedida.length +1}`,        
      imagem: "assets/suco.jpg",
      descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
      preco: "R$ 10,00",
    };
  }

  //     this.bebidaService.adicionarBebidas(bebida)
  //     .subscribe((resultado: IBebida)=>{
  //       console.log('resultado', resultado);
  //       this.listaBedida.push(resultado); //atualizar a tela com as bebidas
  //       // this.buscarBebidas();
  //     });
      
  // }

  adicionarBebida(bebida: IBebida){
    this.pedidoService.adicionarItemPedido(bebida);
  }

  adicionarBebidaComQuantidade(itemComQuantidade: any){
    this.pedidoService.adicionarItensPedido(itemComQuantidade.item, itemComQuantidade.quantidade);
  }
}
