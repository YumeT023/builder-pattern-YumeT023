import {Builder} from "../interfaces/builder.interface";
import {GPSNavigator} from "../components/gps_navigator";
import {TripComputer} from "../components/trip_computer";
import {Engine} from "../components/engine";

export class CarDirector {
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
