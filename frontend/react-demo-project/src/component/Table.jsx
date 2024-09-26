import { Link } from "react-router-dom";

import "./table.css";
import { memo } from "react";

const Table = ({ persons, remove }) => {
  const getAllPersons = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      items[key] = JSON.parse(value);
    }
    return items;
  };

  return (
    <>
      {localStorage.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {getAllPersons().map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.id} </td>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>
                    <button>
                      <Link
                        to="/update"
                        state={{
                          id: person.id,
                          name: person.name,
                          age: person.age,
                        }}
                      >
                        Update
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        remove(person.id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No Deatils</h1>
      )}
    </>
  );
};

export default memo(Table);
