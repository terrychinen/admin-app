// Angular framework imports
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Primeng
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

// Components
import { SideBarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'main-layout',
  imports: [
    RouterOutlet,

    MenuModule,
    ButtonModule,
    RippleModule,

    SideBarComponent,
  ],
  template: `
    <div class="flex h-screen">
      <div class="w-70 shadow-md">
        <sidebar />
      </div>

      <div class="flex-1 flex flex-col">
        <header class="h-14 min-h-14 overflow-hidden bg-primary-900
        shadow-sm flex items-center justify-end px-6">
          <p-button
            label="Sign out"
            variant="text"
            styleClass="text-primary-50!" />
        </header>
        <main class="p-6 overflow-y-auto">
          <router-outlet />
        </main>
      </div>
    </div>
  `
})
export class MainLayout {}
