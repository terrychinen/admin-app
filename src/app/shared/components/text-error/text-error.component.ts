// Angular framework imports
import { Component, effect, input, signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';

// Third-party libraries
import { Subscription } from 'rxjs';

@Component({
  selector: 'text-error',
  template: `
    @if (errorMessage()) {
      <small class="text-red-500">
        {{ errorMessage() }}
      </small>
    }
  `,
})
export class TextErrorComponent {
  control = input.required<AbstractControl | null | undefined>();

  errorMessage = signal<string | null>(null);
  private _controlSubscription?: Subscription;

  constructor() {
    effect(() => {
      this._controlSubscription?.unsubscribe();

      const ctrl = this.control();
      if (ctrl) {
        this._controlSubscription = ctrl.statusChanges.subscribe(() => {
          this._updateErrorMessage(ctrl);
        });

        this._updateErrorMessage(ctrl);
      }
    });
  }

  private _updateErrorMessage(ctrl: AbstractControl): void {
    if (ctrl.invalid && (ctrl.touched || ctrl.dirty)) {
      if (ctrl.errors) {
        const firstErrorKey = Object.keys(ctrl.errors)[0];
        this.errorMessage.set(this._getErrorMessage(firstErrorKey, ctrl.errors[firstErrorKey]));
        return;
      }
    }

    this.errorMessage.set(null);
  }

  private _getErrorMessage(errorKey: string, errorValue: unknown): string {
    type ErrorFn = (error: unknown) => string;

    const defaultErrorMessages: Record<string, string | ErrorFn> = {
      required: 'This field is Required',
      email: 'Please enter a valid email address.',
      pattern: 'The format is not correct',
      minlength: (err: unknown) => {
        if (
          typeof err === 'object' &&
          err !== null &&
          'requiredLength' in err &&
          typeof err.requiredLength === 'number') {
            return `Must have at least ${err.requiredLength} characters`
        }

        return 'The length of the text is incorrect.';
      },
    };

    const messageOrFn = defaultErrorMessages[errorKey];

    return typeof messageOrFn === 'function'
      ? messageOrFn(errorValue)
      : String(messageOrFn || 'Validation error');
  }
}
