import { Component, input, output } from '@angular/core';
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
      (click)="onClick()"
    ></p-button>
  `,
})
export class CustomButtonComponent {
  label = input.required<string>();
  customClass = input<string>('');
  isSubmit = input(false);
  isDisabled = input(false);

  clickEmitter = output<void>();

  onClick(): void {
    this.clickEmitter.emit();
  }
}
