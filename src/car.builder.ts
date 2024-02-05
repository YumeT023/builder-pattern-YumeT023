import {Builder} from "./builder.interface";
import {Car} from "./car";
import {DEFAULT_CAR_SEATS} from "./constants";
import {STANDARD_ENGINE, SportEngine} from "./sport_engine";

export class CarBuilder implements Builder<Car> {
  private _car: Car;

  constructor() {
    this._car = this._createBaseCar();
  }

  /**
   * @internal impl
   */
  private _createBaseCar() {
    const car = new Car();
    car.seats = DEFAULT_CAR_SEATS;
    car.engine = STANDARD_ENGINE;
    car.hasTripComputer = false;
    car.hasGPS = false;
    return car;
  }

  reset(): void {
    this._car = this._createBaseCar();
  }

  setSeats(seats: number): void {
    this._car.seats = seats;
  }

  setEngine(engine: SportEngine): void {
    this._car.engine = engine;
  }

  setTripComputer(tripComputer: boolean): void {
    this._car.hasTripComputer = tripComputer;
  }

  setGPS(gps: boolean): void {
    this._car.hasGPS = gps;
  }

  build(): Car {
    const car = this._car;
    this.reset();
    return car;
  }
}
