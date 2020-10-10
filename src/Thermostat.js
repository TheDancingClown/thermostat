'use strict';

class Thermostat {
  constructor() {
    this.default = 20;
    this.minTemp = 10;
    this.maxEcoTemp = 25;
    this.maxTemp = 32;
    this.ecoMode = true;
    this.temp = this.default;
  }

  increase() {
    this.temp ++;
    if(this.temp > this.maxEcoTemp && this.ecoMode == true) {
      this.temp = this.maxEcoTemp
    } else if(this.temp > this.maxTemp && this.ecoMode == false) {
      this.temp = this.maxTemp
    }
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
