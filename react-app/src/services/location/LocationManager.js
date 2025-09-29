import { GeolocationService } from "./GeolocationService";
import { IpLocationService } from "./IpLocationService";

export const LocationManager = {
  async detect({ useGpsFirst = true } = {}) {
    try {
      if (useGpsFirst) {
        const pos = await GeolocationService.getCurrentPosition({
          timeout: 5000,
        });
        return { type: "gps", ...pos };
      }
    } catch {}
    const ip = await IpLocationService.lookup();
    return { type: "ip", ...ip };
  },
};
