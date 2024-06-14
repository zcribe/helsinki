import { useEffect, useState } from "react";

import countryService from "./services/countries";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toUpperCase().includes(search.toUpperCase())
  );

  let content = "Too many matches, specify another filter.";

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    console.log(country);
    content = (
      <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital[0]}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages).map((lang)=>(
            <li>{lang}</li>
          ))}
        </ul>
        <img src={country.flags.png} width="200" height="200" />
      </>
    );
  } else if (filteredCountries.length < 10) {
    content = filteredCountries.map((country) => (
      <p key={country.area + country.name.common}>{country.name.common}</p>
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
