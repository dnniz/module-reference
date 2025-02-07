import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function firstLetterCapital(): ValidatorFn {
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

export function dateCoulndBeFuture(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const date = new Date(control.value);
    if (date > new Date()) {
      return { dateCoulndBeFuture: {
        message: 'Date could not be future'
      } };
    }
    return null;
  };
}
