import {FormControl} from "@angular/forms";

export class PasswordValidator {

  static getPasswordValidator() {
    return function passwordValidator(control: FormControl): { [s: string]: boolean } {

      // Write code here..
      if (!control.value.match(/^123/)) {
        return {invalidPassword: true};
      }

      return null;
    }
  }
}