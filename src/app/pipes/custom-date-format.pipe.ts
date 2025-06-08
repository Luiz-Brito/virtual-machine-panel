import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {

  private datePipe = new DatePipe('pt-BR');

  transform(value: string | Date): string | null {
    
    if (!value) return null;

    let date: Date;

    if (typeof value === 'string') {
      const cleaned = value.replace(/\.\d{3,6}/, '');
      
      const isoLike = cleaned.endsWith('Z') || cleaned.includes('+') ? cleaned : cleaned + 'Z';

      date = new Date(isoLike);
    } else {
      date = value;
    }

    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }

    return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm');
  }
}