import axios from "axios";


const get = (lat, long) => {
  const request = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,wind_speed_10m&timezone=auto`);
  return request.then((response) => response.data);
};

export default { get };
