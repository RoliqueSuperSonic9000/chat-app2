import React from "react";
import users from "./components/ContactList";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div>
        {users.map((person) => (
          <Contact
            avatar={person.avatar}
            name={person.name}
            online={person.online}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
