const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5d81c69262fa9c1739a4ff78359657c5&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find the location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          ". It is Currently " +
          body.current.temperature +
          " degress out. It feels like " +
          body.current.feelslike +
          " degress out"
      );
    }
  });
};

module.exports = forecast;
