// Angular framework imports
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Services
import { AuthService } from '@auth/services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/auth/sign-in']);
  }

  return true;
};
