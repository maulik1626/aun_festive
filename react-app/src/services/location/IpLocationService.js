import { LocationApiDataSource } from "@data/datasources/remote/location/LocationApiDataSource";

export const IpLocationService = {
  async lookup() {
    return LocationApiDataSource.ipLookup();
  },
};
