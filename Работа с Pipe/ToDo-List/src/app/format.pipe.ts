import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskDescriptionFormat'
})
export class TaskDescriptionFormatPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return 'Описание: ' + value;
  }
}

@Pipe({
  name: 'taskNameFormat'
})
export class TaskNameFormatPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return 'Задача: ' + value;
  }
}
