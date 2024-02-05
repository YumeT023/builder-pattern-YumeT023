import {describe, it, expect} from "vitest";

import {CarBuilder} from "../builders";
import {CarDirector} from "../director";
import {TripComputer, GPSNavigator, Engine} from "../components";
import {Car} from "../car";
import {STANDARD_ENGINE} from "../constants";

describe("Builder", () => {
  const builder = new CarBuilder();
  const director = new CarDirector();

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
