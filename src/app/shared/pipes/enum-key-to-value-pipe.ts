import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'enumKeyToValue',
    standalone: false
})
export class EnumKeyToValuePipe implements PipeTransform {

    transform(key: any, enumObj: any): string {
        if (!key || !enumObj) {
            return '';
        }
        return enumObj[key] || key;
    }
}
