import {describe, it, expect} from "vitest";
import {Director} from "../director";
import {CarBuilder} from "../car.builder";
import {Engine} from "../engine";
import {Car} from "../car";
import {TripComputer} from "../trip_computer";
import {GPSNavigator} from "../gps_navigator";
import {STANDARD_ENGINE} from "../constants";

describe("Builder", () => {
  const builder = new CarBuilder();
  const director = new Director();

  it("should constructor sport car", () => {
    director.constructSportsCar(builder);
    expect(builder.build()).toEqual<Car>({
      seats: 2,
      engine: new Engine("sport car"),
      tripComputer: new TripComputer(),
      gpsNavigator: null,
    });
  });

  it("should constructor city car", () => {
    director.constructCityCar(builder);
    expect(builder.build()).toEqual<Car>({
      seats: 2,
      engine: new Engine("city car"),
      tripComputer: new TripComputer(),
      gpsNavigator: new GPSNavigator("city location"),
    });
  });

  it("should construct SUV car", () => {
    director.constructSUV(builder);
    expect(builder.build()).toEqual<Car>({
      seats: 4,
      engine: STANDARD_ENGINE,
      tripComputer: null,
      gpsNavigator: new GPSNavigator("suv route"),
    });
  });
});
