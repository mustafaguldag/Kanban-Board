import React from "react";
import { useState, useEffect } from "react";
import db from "../firebaseConfig";
import { Link } from "react-router-dom";
import { Easel } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { TrashFill } from "react-bootstrap-icons";

const ClientsPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    // Fetching all the collection
    const collection = await db.collection("users").get();
    const arrayOfDocs = collection.docs.map((doc) => {
      // console.log("doc.id", doc.id);
      return { id: doc.id, ...doc.data() };
    });
    // console.log("arrayOfDocs", arrayOfDocs);
    setUsers(arrayOfDocs);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log("users: ", users);

  // https://github.com/KaterinaLupacheva/react-sorting-with-dropdown/blob/master/src/App.js

  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    if (users !== []) {
      // console.log("triggered!");
      const sortArray = (type) => {
        const types = {
          name: "name",
          weight: "weight",
          height: "height",
        };
        const sortProperty = types[type];
        let sorted = [];
        if (sortProperty === "name") {
          sorted = [...users].sort((a, b) =>
            a[sortProperty].localeCompare(b[sortProperty])
          );
          // console.log("sortProperty: ", sortProperty);
        } else {
          sorted = [...users].sort((a, b) => b[sortProperty] - a[sortProperty]);
        }
        // const sorted = [...users].sort((a, b) => b[sortProperty] - a[sortProperty]);
        // console.log("sorted: ", sorted);
        // console.log("sortProperty: ", sortProperty);
        setUsers(sorted);
      };
      sortArray(sortType);
    }
    // eslint-disable-next-line
  }, [sortType]);

  return (
    <>
      <div>
        <h1>Clients List</h1>

        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="height">Height</option>
        </select>

        {users.map((user) => {
          const removeClient = async () => {
            await db.collection("users").doc(user.id).delete();
            fetchUsers();
          };

          const editClient = async () => {
            let editedName = prompt("New name: ");
            let editedHeight = prompt("New height: ");
            let editedWeight = prompt("New weight: ");
            await db.collection("users").doc(user.id).set({
              name: editedName,
              height: editedHeight,
              weight: editedWeight,
            });
            fetchUsers();
          };

          let bmi = (
            user.weight /
            ((user.height * user.height) / 10000)
          ).toFixed(2);

          return (
            <div className="clients">
              <span>Name: {user.name}</span>
              <br />
              <span>Height: {user.height}cm</span>
              <br />
              <span>Weight: {user.weight}kg</span>
              <br />
              <span>BMI: {bmi}</span>
              <br />
              <div>
                <Link className="m-1" to={`/weeklyBoard/${user.id}`}>
                  <Easel color="green" size={35} />
                </Link>
                <Button
                  className="m-1"
                  variant="outline-warning"
                  onClick={editClient}
                >
                  Edit Client
                </Button>
                <Button
                  className="m-1"
                  variant="outline-danger"
                  onClick={removeClient}
                >
                  <TrashFill />
                </Button>
              </div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ClientsPage;
