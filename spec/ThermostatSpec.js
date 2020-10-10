describe("Thermostat", function() {
  let thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it("should have a default temperature", function() {
    thermo.temp
    expect(thermo.temp).toEqual(20);
  });

});