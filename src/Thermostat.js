'use strict';

class Thermostat {
  constructor() {
    this.default = 20;
    this.minTemp = 10;
    this.maxEcoTemp = 25;
    this.maxTemp = 32;
    this.ecoMode = true;
    if(!localStorage.getItem('temperature')) {
      this.temp = this.default; }
    else {
      this.temp = parseInt(localStorage.getItem('temperature'),10);
    }
  }

  increase() {
    this.temp ++;
    if(this.temp > this.maxEcoTemp && this.ecoMode == true) {
      this.temp = this.maxEcoTemp
      return 'Turn off Eco Mode';
    } else if(this.temp > this.maxTemp && this.ecoMode == false) {
      this.temp = this.maxTemp
      return 'Maximum temperature reached';
    }
    return ''
  }

  decrease() {
    this.temp --;
    if(this.temp < this.minTemp) {
      this.temp = this.minTemp
      return 'Minimum temperature reached';
    }
    return ''
  }

  reset() {
    this.temp = this.default
  }

  switchMode() {
    if(this.ecoMode == true) {
      this.ecoMode = false
    } else if(this.ecoMode == false) {
      this.ecoMode = true
      if(this.temp > this.maxEcoTemp && this.ecoMode == true) {
        this.temp = this.maxEcoTemp
      }
    }
  }

  energyUsage() {
    if(this.temp < 18) {
      return 'low'
    } else if(this.temp > 25) {
      return 'high'
    } else {
    return 'medium'
    }
  }

}
