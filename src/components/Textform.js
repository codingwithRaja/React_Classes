import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCAse", "success");
  };
  const handleLoClick = () => {
    // console.log("Upper Case Clicked");
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to LowerCAse", "success");
  };
  const handleClear = () => {
    // console.log("Upper Case Clicked");
    let newText2 = "";
    setText(newText2);
    props.showAlert("All Data Cleared", "danger");
  };
  //   const handleEmail = () => {
  //     // console.log("Upper Case Clicked");
  //     let newText3 = text;
  //     // var result;
  //     function extractEmails(newText3) {
  //       return newText3.match(
  //         /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
  //       );
  //      let result = extractEmails(newText3).join("\n");
  //     }

  //     setText(newText3);
  //   };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   let myStyle = {
  //     color: "white",
  //     backgroundColor: "black",
  //   };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Your text here"
            id="myBox"
            rows={6}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-1 " onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-2 my-1 " onClick={handleClear}>
          Clear
        </button>
        {/* <button className="btn btn-success mx-2 " onClick={handleEmail}>
          Email Extrator
        </button> */}
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words ,{text.length} character{" "}
        </p>
        <p>Time for read text ={text.length * 0.008} Mintues</p>
        <h2>Preview</h2>
        <p>{text}</p>
        {/* <button className="btn btn-success">Enable Dark Mode</button> */}
      </div>
    </>
  );
}
