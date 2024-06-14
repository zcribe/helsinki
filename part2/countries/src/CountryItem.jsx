const CountryItem = (props) => {
  const { country, setSearch } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(country.name.common);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p key={country.area + country.name.common}>
        {country.name.common} <button type="submit">show</button>
      </p>
    </form>
  );
};

export default CountryItem;
