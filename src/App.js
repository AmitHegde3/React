import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setDarkMode] = useState("light"); // whether dark mode is enabled or not

  let toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#282f36";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    // This is a fragment ...<> </>....To wrap two or more components.
    <>
      {/* -----------Props---------- */}
      <Navbar
        title="Text Formatter"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
