// Angular framework imports
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Primeng library imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.page.html',
  imports: [
    ReactiveFormsModule,

    ButtonModule,
    CardModule,
    FloatLabel,
    InputTextModule,
  ]
})
export class SignInPage {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login(): void {}
}
