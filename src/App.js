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
      document.title = "Text Formatter - Dark Mode";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "Text Formatter - Home";
    }
  };

  let greenMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#086108";
      showAlert("Green mode has been enabled", "success");
      document.title = "Text Formatter - Green Mode";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "Text Formatter - Home";
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
        greenMode={greenMode}
      />
      <Alert msg={alert} />
      <div className="container my-5">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
          greenMode={greenMode}
        />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
