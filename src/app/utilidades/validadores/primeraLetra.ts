import { AbstractControl, ValidatorFn } from '@angular/forms';

export function primeraLetraMayuscula(): ValidatorFn {
    return (control: AbstractControl) => {
        const valor = control.value as string;
        if (!valor) {return null; }
        if (valor.length === 0) {return null; }

        const primeraletra = valor[0];
        if (primeraletra !== primeraletra.toUpperCase()) {
            return {
                primeraLetraMayuscula: {
                    mensaje: 'First char shall be in upper case. Please review it before save'
                }
            };
        }

        return null;
    };
}
