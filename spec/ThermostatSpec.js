describe("Thermostat", function() {
  let thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it("should have a default temperature", function() {
    thermo.temp
    expect(thermo.temp).toEqual(20);
  });
  it('defaults in eco mode', function() {
    expect(thermo.ecoMode).toBe(true)
  })

  describe('increase', function() {
    it('should increment the temperature', function() {
      thermo.increase()
      expect(thermo.temp).toEqual(21);
    })
    it('cannot increase above 25 in eco mode', function() {
      for (let i = 0; i < 6; i++) {
        thermo.increase()
      }
      expect(thermo.temp).toEqual(25)
    })
  });

  describe('decrease', function() {
    it('should decrement the temperature', function() {
      thermo.decrease()
      expect(thermo.temp).toEqual(19);
    })
    it('cannot decrease below 10', function() {
      for (let i = 0; i < 11; i++) {
        thermo.decrease()
      }
      expect(thermo.temp).toEqual(10)
    })
  });

  describe('reset', function() {
    it('should reset the temperature back to 20', function() {
      thermo.decrease()
      thermo.reset()
      expect(thermo.temp).toEqual(20)
    })
  })

  describe('modeSwitch', function() {
    it('can switch between eco mode', function() {
      thermo.switchMode()
      expect(thermo.ecoMode).toBe(false)
      thermo.switchMode()
      expect(thermo.ecoMode).toBe(true)
    })
  })

});