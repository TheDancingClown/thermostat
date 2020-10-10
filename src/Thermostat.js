'use strict';

class Thermostat {
  constructor() {
    this.default = 20;
    this.minTemp = 10;
    this.maxEcoTemp = 25;
    this.maxTemp = 32;
    if(!localStorage.getItem('temperature')) {
      this.temp = this.default;
      this.ecoMode = 'Eco' }
    else {
      this.ecoMode = localStorage.getItem('ecomode');
      this.temp = parseInt(localStorage.getItem('temperature'),10);
      this.checkMaxTemp()
    }
  }

  increase() {
    this.temp ++;
    return this.checkMaxTemp()
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
    this.ecoMode = 'Eco'
  }

  switchMode() {
    if(this.ecoMode == 'Eco') {
      this.ecoMode = ''
    } else if(this.ecoMode == '') {
      this.ecoMode = 'Eco'
      this.checkMaxTemp()
    }
  }

  checkMaxTemp() {
    if(this.temp > this.maxEcoTemp && this.ecoMode == 'Eco') {
      this.temp = this.maxEcoTemp
      return 'Turn off Eco Mode';
    }
    else if(this.temp > this.maxTemp && this.ecoMode == '') {
      this.temp = this.maxTemp
      return 'Maximum temperature reached';
    }
    else return ''
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
