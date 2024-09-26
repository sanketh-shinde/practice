const Car = (props) => {
  let { name, brand, model, year } = props.car;

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Brand: {brand}</h1>
      <h1>Model: {model}</h1>
      <h1>Year: {year}</h1>
    </>
  );
};

export default Car;
