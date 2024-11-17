import "./App.css";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Johnson",
      phone: "123-456-7890",
      email: "johndoe@example",
      company: "ABC Company",
      position: "Software Engineer",
    },
  ]);

  const [newFirstName, setnewFirstName] = useState("");
  const [newlastName, setlastName] = useState("");
  const [id, setId] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newEmail, setemail] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const addItem = () => {
    const newItem = {
      firstName: newFirstName,
      lastName: newlastName,
      id: id,
      phone: newPhone,
      email: newEmail,
      company: company,
      position: position,
    };

    let counter = 1;
    setData([...data, newItem]);
    setnewFirstName("");
    setlastName("");
    setId(counter++);
    setPhone("");
    setemail("");
    setCompany("");
    setPosition("");

    document.querySelector(".container").style.display = "none";
  };

  function ShowContent() {
    document.querySelector(".container").style.display = "flex";
  }

  return (
    <div className="App">
      <h1>Kontaktbogen</h1>
      <button onClick={ShowContent}>Add an item to the list</button>
      <div className="container">
        <input type="text" placeholder="First Name" value={newFirstName} onChange={(e) => setnewFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={newlastName} onChange={(e) => setlastName(e.target.value)} />
        <input type="text" placeholder="Phone" value={newPhone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Email" value={newEmail} onChange={(e) => setemail(e.target.value)} />
        <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
        <button onClick={addItem}>Add Item</button>
      </div>

      <List data={data} />
    </div>
  );
}

export default App;
