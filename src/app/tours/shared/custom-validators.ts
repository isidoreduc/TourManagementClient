import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static StartDateBeforeEndDateValidator(control: AbstractControl) {
    const startDate = control.get('startDate');
    const endDate = control.get('endDate');
    if (startDate.value < endDate.value) {
      return null;
    }
    return { startDateBeforeEndDate: true };
  }
}
