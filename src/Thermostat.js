'use strict';

class Thermostat {
  constructor() {
    this.default = 20
    this.minTemp = 10;
    this.ecoMode = true
    this.temp = this.default;
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

  reset() {
    this.temp = this.default
  }

  switchMode() {
    if(this.ecoMode == true) {
      this.ecoMode = false
    } else if(this.ecoMode == false) {
      this.ecoMode = true
    }
  }

}
