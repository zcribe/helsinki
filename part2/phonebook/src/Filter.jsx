const Filter = (props) => {
  return (
    <div>
      filter shown with{" "}
      <input value={props.filterTerm} onChange={props.handleFilterTermChange} />
    </div>
  );
};

export default Filter;