import {Builder} from "./builder.interface";
import {GPSNavigator} from "./gps_navigator";
import {TripComputer} from "./trip_computer";
import {Engine} from "./engine";

export class Director {
  constructSportsCar(builder: Builder) {
    builder.setSeats(2);
    builder.setEngine(new Engine("sport car"));
    builder.setTripComputer(new TripComputer());
  }

  constructCityCar(builder: Builder) {
    builder.setSeats(2);
    builder.setTripComputer(new TripComputer());
    builder.setEngine(new Engine("city car"));
    builder.setGpsNavigator(new GPSNavigator("city location"));
  }

  constructSUV(builder: Builder) {
    builder.setSeats(4);
    builder.setGpsNavigator(new GPSNavigator("suv route"));
  }
}
