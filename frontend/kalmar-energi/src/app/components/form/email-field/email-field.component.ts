import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

// Error messages for the form control.
const requiredEmailErrorMessage = 'Du måste ange en epost-adress.';
const emailPatternErrorMessage = 'Ange en korrekt epost-adress.';

/**
 * Component for displaying an email field.
 *
 */
@Component({
    selector: 'email-field',
    templateUrl: './email-field.component.html',
    styleUrls: [ './email-field.component.scss' ]
})
export class EmailFieldComponent implements OnInit {
    @Input() label: string;
    @Input() email: string;
    @Input() isRequired: boolean;
    @Output() emailChange = new EventEmitter<string>();

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$')
    ]);

    constructor() {}

    ngOnInit(): void {}

/**
 * Check the email input field for error.
 *
 * @returns Error message or an empty string.
 */
    getMessage(): string {
        return this.checkEmailAndReturnMessage();
    }


/**
 * Check if the email input is empty, if so return required email error message.
 * Otherwise, check if the email in the input is of the correct pattern. If not, return email pattern error message.
 * If no error, return an empty string.
 *
 * @returns The string with the message, either an error message or empty string.
 */
    checkEmailAndReturnMessage(): string {
        if (this.isRequiredEmailError()) {
          return requiredEmailErrorMessage;
        }

        return this.isEmailPatternError() ? emailPatternErrorMessage : '';
    }

/**
 * Check if the email input has a required error, which is true if nothing is entered in the input field.
 *
 * @returns True if the email input has an error caused by an empty input, false otherwise.
 */
    isRequiredEmailError(): boolean {
        return this.emailFormControl.hasError('required');
    }

/**
 * Check if the email input has a pattern error.
 *
 * @returns True if the email input has an error caused by wrong email pattern, false otherwise.
 */
    isEmailPatternError(): boolean {
        return this.emailFormControl.hasError('pattern');
    }

/**
 * Emits a change of the email to the parent.
 *
 */
  onEmailChange() {
        this.emailChange.emit(this.email);
    }
}
