import {Builder} from "./builder.interface";
import {SportEngine} from "./sport_engine";

export class Director {
  makeSUV(builder: Builder) {
    builder.reset();
    builder.setSeats(4);
    builder.setEngine(new SportEngine("SUV"));
    builder.setTripComputer(true);
    builder.setGPS(true);
  }

  constructSportsCar(builder: Builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine(new SportEngine("Sport Car Engine"));
    builder.setTripComputer(false);
    builder.setGPS(true);
  }
}
