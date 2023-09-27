import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  itemsMenu: MenuItem[] | undefined;
  constructor() {}

  ngOnInit(): void {
    this.menuStatic();
  }

  menuStatic() {
    this.itemsMenu = [
      {
        label: 'Home',
        routerLink: '',
      },

      {
        label: 'Cardápio',
        routerLink: '',
      },
      {
        label: 'Cadastro',
        routerLink: '',
      },
    ];
  }
}
