import {Builder} from "../interfaces";
import {GPSNavigator, TripComputer, Engine} from "../components";
import {CarManual} from "../car";
import {DEFAULT_CAR_SEATS, STANDARD_ENGINE} from "../constants";

export class CarManualBuilder implements Builder<CarManual> {
  private seats!: number;
  private engine!: Engine;
  private tripComputer!: TripComputer | null;
  private gpsNavigator!: GPSNavigator | null;

  /**
   * init/reinit
   */
  private initialize() {
    this.seats = DEFAULT_CAR_SEATS;
    this.engine = STANDARD_ENGINE;
    this.tripComputer = null;
    this.gpsNavigator = null;
  }

  constructor() {
    this.initialize();
  }

  reset(): void {
    this.initialize();
  }

  setSeats(seats: number): void {
    this.seats = seats;
  }

  setEngine(engine: Engine): void {
    this.engine = engine;
  }

  setTripComputer(tripComputer: TripComputer): void {
    this.tripComputer = tripComputer;
  }

  setGpsNavigator(gpsNavigator: GPSNavigator): void {
    this.gpsNavigator = gpsNavigator;
  }

  build(): CarManual {
    const manual = new CarManual(this.seats, this.engine, this.tripComputer!, this.gpsNavigator!);
    this.reset();
    return manual;
  }
}
