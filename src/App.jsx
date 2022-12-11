import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";

export default function App(props) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
