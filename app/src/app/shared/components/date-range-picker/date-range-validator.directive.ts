import { ValidatorFn, AbstractControl } from '@angular/forms';

export function dateRangeValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    let valid = false;

    try {
      const json = JSON.parse(control.value);

      if ('start' in json && 'end' in json) {
        const start = new Date(json['start']);
        const end = new Date(json['end']);

        if (start.getTime() <= end.getTime()) {
          valid = true;
        }
      }
    } catch (e) {}

    return valid ? { 'dateRangeValidator': { value: control.value } } : null;
  };
}
