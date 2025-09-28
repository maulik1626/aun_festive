import { LocationApiDataSource } from "@data/datasources/remote/location/LocationApiDataSource";
import { BaseRepository } from "@data/repositories/base/BaseRepository";

export class LocationRepository extends BaseRepository {
  ipLookup() {
    return LocationApiDataSource.ipLookup();
  }
}
