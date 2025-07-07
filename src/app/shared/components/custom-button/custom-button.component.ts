// Angular framework imports
import { Component, input, output } from '@angular/core';

// Primeng library imports
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'custom-button',
  imports: [ButtonModule],
  template: `
    <p-button
      [label]="label()"
      [styleClass]="customClass()"
      [type]="isSubmit() ? 'submit' : 'button'"
      [disabled]="isDisabled()"
      [loading]="isLoading()"
      (click)="onClick()"
    ></p-button>
  `,
})
export class CustomButtonComponent {
  label = input.required<string>();
  customClass = input<string>('');
  isSubmit = input(false);
  isDisabled = input(false);
  isLoading = input(false);

  clickEmitter = output<void>();

  onClick(): void {
    this.clickEmitter.emit();
  }
}
