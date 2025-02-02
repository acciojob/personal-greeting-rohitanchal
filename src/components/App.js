import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting("Please enter a valid name.");
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleChange} 
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{greeting}</p>
    </div>
  );
};

export default App;
