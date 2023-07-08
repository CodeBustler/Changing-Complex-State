import React, { useState } from "react";

function App() {
  let [fName, setfName] = useState("");
  let [lName, setlName] = useState("");

  function onChangeFname(event) {
    setfName(event.target.value);
  }

  function onChangeLname(event) {
    setlName(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={onChangeFname} />
        <input name="lName" placeholder="Last Name" onChange={onChangeLname} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
