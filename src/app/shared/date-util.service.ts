import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  compareDateWithoutTime(d1: Date, d2: Date): boolean {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    date1.setHours(0,0,0,0);
    date2.setHours(0,0,0,0)
    if (date1 > date2) {
      return false;
    } else if (date1 < date2) {
      return false;
    } else {
      return true;
    }
  }

  compareMonth(d1: Date, d2: Date): boolean {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    date1.setDate(1);
    date2.setDate(1);
    date1.setHours(0,0,0,0);
    date2.setHours(0,0,0,0)
    if (date1 > date2) {
      return false;
    } else if (date1 < date2) {
      return false;
    } else {
      return true;
    }
  }

  compareDateInRange(d1: Date, d2: Date, d3: Date): boolean {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const date3 = new Date(d3);
    date1.setHours(0,0,0,0);
    date2.setHours(0,0,0,0)
    date3.setHours(0,0,0,0)
    if (date1 <= date3 && date3 <= date2) {
      return true;
    }  else {
      return false;
    }
  }
}
