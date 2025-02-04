import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function firstLetterCapital() {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const firstLetter = control.value.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
      return { firstLetterCapital: {
        message: 'Name must start with a capital letter'
      } };
    }
    return null;
  };
}
