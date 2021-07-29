import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  writeLog(log: string) {
    console.log(log);
  }
}
