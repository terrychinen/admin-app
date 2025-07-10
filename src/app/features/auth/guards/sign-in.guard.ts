// Angular framework imports
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Services
import { AuthService } from '@auth/services/auth.service';

export const signInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
