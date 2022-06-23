import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const onlyLettersValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors => {
  if (!control.value) {
    return;
  }
  const pattern = /[^A-Za-zÀ-ÖØ-öø-ÿ]/;
  if (pattern.test(control.value)) {
    return { onlyLetters: { message: "Only letters allowed" } };
  }
  return;
};
