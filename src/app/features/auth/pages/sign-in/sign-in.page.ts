// Angular framework imports
import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Rxjs
import { finalize } from 'rxjs';

// Primeng library imports
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

// Services
import { AuthService } from '@auth/services/auth.service';

// Shared
import {
  CustomButtonComponent
} from '@shared/components/custom-button/custom-button.component';
import {
  InputTextErrorComponent
} from '@app/shared/components/input-text-error/input-text-error.component';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.page.html',
  imports: [
    ReactiveFormsModule,

    CardModule,
    FloatLabelModule,
    InputTextModule,

    CustomButtonComponent,
    InputTextErrorComponent,
  ]
})
export class SignInPage implements OnInit {
  private _router = inject(Router);
  private _authService = inject(AuthService);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.signInForm.valueChanges.subscribe(() => {
      if (this.errorMessage()) {
        this.errorMessage.set(null);
      }
    });
  }

  login(): void {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);

    const { email, password } = this.signInForm.value;

    this._authService.signIn(email!, password!)
    .pipe(
      finalize(() => this.isLoading.set(false))
    )
    .subscribe({
      next: () => {
        this._router.navigate(['/admin']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.errorMessage.set('Login was not successful.');
          return;
        }

        this.errorMessage.set('An unexpected error occurred. Please try again');
      },
    });
  }
}
