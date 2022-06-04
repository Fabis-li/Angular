import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { Route, RouterModule,} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ItemCardapioComponent } from './components/item-cardapio/item-cardapio.component';
import { PedidoListaComponent } from './pages/pedido-lista/pedido-lista.component'


const ROUTES: Route[] = [
  {
    path:"",
    component: ContentComponent
  },
  {
    path: 'comida',
    component: ComidaComponent
  },
  {
    path: 'bebida',
    component: BebidaComponent
  },
  {
    path: 'pedido',
    component: PedidoListaComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ComidaComponent,
    BebidaComponent,
    ItemCardapioComponent,
    PedidoListaComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
