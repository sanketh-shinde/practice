import { useState } from "react";
import Table from "./Table";

const Input = () => {
  const personObject = {
    id: "",
    name: "",
    age: "",
  };

  const [person, setPerson] = useState(personObject);
  const [displayPerson, setDisplayPerson] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();

    if (localStorage.length == 0) {
      localStorage.setItem(person.id, JSON.stringify(person));
      setDisplayPerson([...displayPerson, person]);
      setPerson(personObject);
    } else {
      if (person.id == JSON.parse(localStorage.getItem(1)).id) {
        alert("id already exists");
      } else {
        localStorage.setItem(person.id, JSON.stringify(person));
        setDisplayPerson([...displayPerson, person]);
        setPerson(personObject);
      }
    }
  };

  const handleRemove = (id) => {
    localStorage.removeItem(id);
    setDisplayPerson((prevPerson) =>
      prevPerson.filter((person) => person.id !== id)
    );
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          Id:
          <input
            type="number"
            placeholder="Enter Id"
            required
            value={person.id}
            onChange={(e) => setPerson({ ...person, id: e.target.value })}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter name"
            required
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            placeholder="Enter age"
            required
            value={person.age}
            onChange={(e) => setPerson({ ...person, age: e.target.value })}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      <Table persons={displayPerson} remove={handleRemove} />
    </>
  );
};

export default Input;
