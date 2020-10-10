'use strict';

class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
  }

  increase() {
    this.temp ++;
  }

  decrease() {
    this.temp --;
    if(this.temp < this.minTemp) {
      this.temp = this.minTemp
    }
  }

}
