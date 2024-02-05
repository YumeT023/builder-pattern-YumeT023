import {Builder} from "./builder.interface";
import {CarManual} from "./car_manual";
import {DEFAULT_CAR_SEATS} from "./constants";
import {STANDARD_ENGINE, SportEngine} from "./sport_engine";

export class CarManualBuilder implements Builder<CarManual> {
  private _carManual: CarManual;

  constructor() {
    this._carManual = this._createBaseManual();
  }

  /**
   * @internal impl
   */
  private _createBaseManual() {
    const car = new CarManual();
    car.seats = DEFAULT_CAR_SEATS;
    car.engine = STANDARD_ENGINE;
    car.hasTripComputer = false;
    car.hasGPS = false;
    return car;
  }

  reset(): void {
    this._carManual = this._createBaseManual();
  }

  setSeats(seats: number): void {
    this._carManual.seats = seats;
  }

  setEngine(engine: SportEngine): void {
    this._carManual.engine = engine;
  }

  setTripComputer(tripComputer: boolean): void {
    this._carManual.hasTripComputer = tripComputer;
  }

  setGPS(gps: boolean): void {
    this._carManual.hasGPS = gps;
  }

  build(): CarManual {
    const carManual = this._carManual;
    this.reset();
    return carManual;
  }
}
