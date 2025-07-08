import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'main-layout',
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.scss',
  imports: [
    RouterOutlet,
    MenuModule,
    ButtonModule,
    RippleModule,
  ],
})
export class MainLayout {
  // In a real application, menuItems comes from the backend
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-th-large'
    },
    {
      label: 'Products',
      icon: 'pi pi-box'
    }
  ];
}
