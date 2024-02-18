import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setDarkMode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  let toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#282f36";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
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
      <Alert msg={alert} />
      <div className="container my-5">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
