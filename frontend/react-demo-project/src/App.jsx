function App() {
  let arr = ["mango", "apple", "strawberry", "apple"];
  let i = 1;

  return (
    <>
      {arr.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </>
  );
}

export default App;
