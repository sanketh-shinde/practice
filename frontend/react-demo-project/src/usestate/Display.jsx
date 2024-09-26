const Display = (props) => {
  return (
    <>
      {props.details.map((person, index) => (
        <h1 key={index}>
          {person.name} {person.city}
        </h1>
      ))}
    </>
  );
};

export default Display;
