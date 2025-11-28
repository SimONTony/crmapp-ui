import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordMatchValidator(
    passwordControlName: string,
    confirmControlName: string
): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const passwordControl = formGroup.get(passwordControlName);
        const confirmControl = formGroup.get(confirmControlName);

        if (!passwordControl || !confirmControl || confirmControl.pristine || !confirmControl.value) {
            return null;
        }
        if (passwordControl.value !== confirmControl.value) {
            confirmControl.setErrors({misMatch: true});
            return null;
        } else {
            if (confirmControl.hasError('misMatch')) {
                confirmControl.setErrors(null);
            }
            return null;
        }
    };
}
