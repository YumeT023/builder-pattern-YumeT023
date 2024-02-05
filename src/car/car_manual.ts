import {GPSNavigator, TripComputer, Engine} from "../components";

export class CarManual {
  constructor(
    public seats: number,
    public engine: Engine,
    public tripComputer: TripComputer | null,
    public gpsNavigator: GPSNavigator | null
  ) {}
}
