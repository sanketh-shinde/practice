import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const id = state?.id;
  const name = state?.name;
  const age = state?.age;

  const personObject = {
    id,
    name,
    age,
  };

  const [person, setPerson] = useState(personObject);

  const handleUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem(person.id, JSON.stringify(person));
    navigate("/input");
    alert("updated");
  };

  return (
    <>
      <form onSubmit={handleUpdate}>
        <h1>Update Person</h1>
        <label>
          Id:
          <input
            type="number"
            placeholder="Enter Id"
            readOnly
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
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            placeholder="Enter age"
            value={person.age}
            onChange={(e) => setPerson({ ...person, age: e.target.value })}
            required
          />
        </label>
        <input type="submit" value="Update" />
      </form>
      <button onClick={() => navigate(-1, { replace: true })}>Go back!</button>
    </>
  );
};

export default Update;
