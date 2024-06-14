import { useEffect, useState } from "react";

import countryService from "./services/countries";
import weatherService from "./services/weather"


import DataView from "./DataView";
import CountryItem from "./CountryItem";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState({})

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toUpperCase().includes(search.toUpperCase())
  );

  let content = "Too many matches, specify another filter.";

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];

    weatherService.get(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1]).then((response )=> setWeather(response))

    content = <DataView country={country} weather={weather}/>;
    
  } else if (filteredCountries.length < 10) {
    content = filteredCountries.map((country) => (
      <CountryItem country={country} setSearch={setSearch} />
    ));
  }

  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountries(response);
    });
  }, []);

  return (
    <>
      <p>
        find countries <input value={search} onChange={handleSearchChange} />
      </p>
      <div>{content}</div>
    </>
  );
}

export default App;
