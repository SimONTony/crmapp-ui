import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'enumValueToKey',
    standalone: false
})
export class EnumValueToKeyPipe implements PipeTransform {

    transform(value: any, enumObj: any): string | undefined {
        if (!value || !enumObj) {
            return undefined;
        }

        const values = Object.values(enumObj);

        let number = values.findIndex(item => item === value);
        let key = Object.keys(enumObj)[number];

        return key;
    }
}
