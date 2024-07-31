import "./App.css";
import Header from "./header.jsx";
import Msg from "./msg";
import { useState } from "react";
import { useEffect } from "react";
import usePrint from "./CostHook";

function App(props) {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Ali", age: 88 },
    { id: 2, name: "Ahmed", age: 88 },
    { id: 3, name: "Noor", age: 88 },
  ]);

  let getUser = (event) => {
    let inputUser = event.target.value;
    setName(inputUser);

    console.log(event.target.value, "it should be the input user");
  };

  let addUser = () => {
    let data = users;
    data.push({ id: Math.random(), name: name, age: 99 });
    console.log(data, "updated");
    setUsers([...data]);
  };

  useEffect(() => {
    console.log("component is rerendering");
  });
  // const [mode, setMode] = useState(false);
  // let changeMode = () => {
  //   setMode(true);
  // };
  // const [counter, setCounter] = useState();
  return (
    <div className="main">
      <input type="text" onChange={getUser} />

      <button onClick={addUser}>Add</button>
      {users.map((user) => (
        <div className="list" key={user.id}>
          {user.name}
        </div>
      ))}
      {/* <button onClick={() => setPrint("Ali")}>change</button> */}
      {/* <Header name={print}>
        <Msg />
      </Header> */}
      {/* {mode ? "true" : "false"}
      <button onClick={changeMode}>change print</button> */}
    </div>
  );
}

export default App;
