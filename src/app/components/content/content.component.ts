import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_MOCK } from 'src/app/mocks/menu-mock';
import { IMenu } from 'src/app/models/menu.model';




@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  listadeOpcoesDeMenu: IMenu[] = MENU_MOCK;
    
  


  constructor(private route: Router) { }

  ngOnInit(): void {
    
  }

  redirecionar(path: string) {
    this.route.navigateByUrl(path);
  }
}
