import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  arr:string[];
  addData(value:string)
  {
    this.arr.push(value);
  }
  getData(){
    return this.arr;
  }
  constructor() { }

}
