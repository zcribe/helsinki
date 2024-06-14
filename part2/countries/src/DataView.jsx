const DataView = (props) => {
  const { country, weather } = props;
  console.log(weather);
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} width="200" height="200" />
      <h2>Weather in {country.capital}</h2>
      <p>temperature: {weather.current.temperature_2m} C</p>
      <p>wind: {weather.current.wind_speed_10m} m/s</p>
    </>
  );
};

export default DataView;
