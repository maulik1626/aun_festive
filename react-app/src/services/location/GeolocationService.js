export const GeolocationService = {
  getCurrentPosition(options) {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation)
        return reject(new Error("Geolocation unsupported"));
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            accuracy: pos.coords.accuracy,
          }),
        (err) => reject(err),
        options
      );
    });
  },
};
