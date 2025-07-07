// Angular framework imports
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Primeng library imports
import { CardModule } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

// Shared
import {
  CustomButtonComponent
} from '@shared/components/custom-button/custom-button.component';
import { TextErrorComponent } from '@shared/components/text-error/text-error.component';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.page.html',
  imports: [
    ReactiveFormsModule,

    CardModule,
    FloatLabel,
    InputTextModule,

    CustomButtonComponent,
    TextErrorComponent,
  ]
})
export class SignInPage {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login(): void {}
}
