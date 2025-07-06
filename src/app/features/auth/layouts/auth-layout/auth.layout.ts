// Angular framework imports
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-layout',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AuthLayout {}
