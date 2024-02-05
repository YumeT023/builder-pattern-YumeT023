import {GPSNavigator} from "./gps_navigator";
import {TripComputer} from "./trip_computer";
import {Engine} from "./engine";

export interface Builder<T = unknown> {
  reset(): void;
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setTripComputer(tripComputer: TripComputer): void;
  setGpsNavigator(gps: GPSNavigator): void;
  /**
   * Get the built <T> object
   */
  build(): T;
}
