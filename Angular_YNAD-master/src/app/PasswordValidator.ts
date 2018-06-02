import {FormControl} from "@angular/forms";

export class PasswordValidator {

  static getPasswordValidator() {
    return function passwordValidator(control: FormControl): { [s: string]: boolean } {
      // If password value has these values a user can log in
      if (!control.value.match(/^123/ || /^asd/ )) {
        return {invalidPassword: true};
      }
      return null;
    }
  }
}