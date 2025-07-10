// Angular framework imports
import { Routes } from '@angular/router';

// Layouts
import { AuthLayout } from '@auth/layouts/auth-layout/auth.layout';
import { MainLayout } from './layouts/main/main.layout';

// Pages
import { ProductListPage } from '@products/product-list.page';
import { SignInPage } from '@auth/pages/sign-in/sign-in.page';

// Guard
import { authGuard } from './features/auth/guards/auth.guard';
import { signInGuard } from './features/auth/guards/sign-in.guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    canActivate: [signInGuard],
    children: [
      { path: 'sign-in', component: SignInPage },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: 'products', component: ProductListPage }
    ],
  },
  { path: '**', redirectTo: 'auth' }
];
