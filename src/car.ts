import {GPSNavigator} from "./gps_navigator";
import {TripComputer} from "./trip_computer";
import {Engine} from "./engine";

export class Car {
  constructor(
    public seats: number,
    public engine: Engine,
    public tripComputer: TripComputer | null,
    public gpsNavigator: GPSNavigator | null
  ) {}
}
