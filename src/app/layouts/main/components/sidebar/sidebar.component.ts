// Angular framework imports
import { Component } from '@angular/core';

// Primeng
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

// Environments
import { environment } from '@environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar',
  imports: [
    RouterLink,
    MenuModule,
  ],
  template: `
    <p-menu [model]="menuItems" styleClass="h-full border-none!">
      <ng-template #start>
        <h2 class="text-2xl flex items-center justify-center pt-4 mb-6">
          {{ companyName }}
        </h2>
      </ng-template>
      <ng-template #item let-item>
        <a pRipple class="flex items-center p-menu-item-link" routerLink="{{ item.url }}">
          <span [class]="item.icon" class="mr-2 py-3"></span>
          <span>{{ item.label }}</span>
        </a>
      </ng-template>
    </p-menu>
  `,
})
export class SideBarComponent {
  companyName = environment.companyName;

    // In a real application, menuItems comes from the backend
    menuItems: MenuItem[] = [
      {
        label: 'Dashboard',
        icon: 'pi pi-th-large',
        url: 'dashboard'
      },
      {
        label: 'Products',
        icon: 'pi pi-box',
        url: 'products'
      }
    ];
}
