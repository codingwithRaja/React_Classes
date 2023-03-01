// import logo from "./logo.svg";

import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform from "./components/Textform";
import { useState } from "react";
// import { Route, Routes } from "react-router-dom";


// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type, });
    setTimeout(() => { setAlert(null); }, 1500);
  };
  return (
    <>
      <Navbar title="TextEditor" />
      <Alert alert={alert} />
{/* <Routes> */}
  {/* <Route exact path="/" element={ */}
  <div className="container">
        <Textform heading="Enter text to analyze" showAlert={showAlert} />
      </div>
      {/* }> */}
{/* </Route> */}
{/* <Route exact path="/about" element={<About/>}></Route> */}
{/* </Routes> */}
      
      
    </>
  );
}

export default App;
