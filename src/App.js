import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    // This is a fragment ...<> </>....To wrap two or more components.
    <>
      {/* -----------Props---------- */}
      <Navbar title="Text Formatter" aboutText="About" />
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
