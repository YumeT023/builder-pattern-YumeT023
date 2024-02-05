import {describe, it, expect} from "vitest";
import {Director} from "../director";
import {CarBuilder} from "../car.builder";
import {SportEngine} from "../sport_engine";
import {CarManualBuilder} from "../car_manual.builder";

describe("Builder", () => {
  it("should build SUV car and its manual", () => {
    const director = new Director();

    const carBuilder = new CarBuilder();
    const carManualBuilder = new CarManualBuilder();

    director.makeSUV(carBuilder);
    director.makeSUV(carManualBuilder);

    const car = carBuilder.build();
    const manual = carManualBuilder.build();

    const expectedSpec = {
      engine: new SportEngine("SUV"),
      seats: 4,
      hasTripComputer: true,
      hasGPS: true,
    };

    expect(car).toEqual(expectedSpec);
    expect(manual).toEqual(expectedSpec);
  });

  it("should build Sports car and its manual", () => {
    const director = new Director();

    const carBuilder = new CarBuilder();
    const carManualBuilder = new CarManualBuilder();

    director.constructSportsCar(carBuilder);
    director.constructSportsCar(carManualBuilder);

    const car = carBuilder.build();
    const manual = carManualBuilder.build();

    const expectedSpec = {
      seats: 2,
      engine: new SportEngine("Sport Car Engine"),
      hasTripComputer: false,
      hasGPS: true,
    };

    expect(car).toEqual(expectedSpec);
    expect(manual).toEqual(expectedSpec);
  });
});
