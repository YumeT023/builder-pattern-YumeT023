import {SportEngine} from "./sport_engine";

export interface Builder<T = unknown> {
  reset(): void;
  setSeats(seats: number): void;
  setEngine(engine: SportEngine): void;
  setTripComputer(tripComputer: boolean): void;
  setGPS(gps: boolean): void;
  /**
   * Get the built <T> object
   */
  build(): T;
}
