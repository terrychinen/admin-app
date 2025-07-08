// Angular framework imports
import { Routes } from '@angular/router';

// Layouts
import { AuthLayout } from '@auth/layouts/auth-layout/auth.layout';

// Pages
import { SignInPage } from '@auth/pages/sign-in/sign-in.page';
import { MainLayout } from './layouts/main/main.layout';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: 'sign-in', component: SignInPage },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    component: MainLayout,
  },
  { path: '**', redirectTo: 'auth' }
];
