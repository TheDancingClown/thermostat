describe("Thermostat", function() {
  let thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it("should have a default temperature", function() {
    thermo.temp
    expect(thermo.temp).toEqual(20);
  });

  describe('increase', function() {
    it('should increment the temperature', function() {
      thermo.increase()
      expect(thermo.temp).toEqual(21);
    })
  });

});