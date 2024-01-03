import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Rating from "./rating";
function App() {
  let [selection1, setSelection1] = useState(false);
  let [selection2, setSelection2] = useState(false);
  let [selection3, setSelection3] = useState(false);

  return (
    <div className="App">
      {/* <div
        className="multiselectiondiv"
        onClick={() => {
          setSelection1(!selection1);
          setSelection2(!selection2);
          setSelection3(!selection3);
        }}
      >
        Enable multiselection
      </div>
      <div
        className="selection1"
        onClick={() => {
          setSelection1(!selection1);
        }}
      >
        {selection1 ? (
          <div>
            <div>selection1</div>
            <div>React is the library for web and native user interfaces.</div>
          </div>
        ) : (
          <div>selection1</div>
        )}
      </div>
      <div
        className="selection2"
        onClick={() => {
          setSelection2(!selection2);
          setSelection1(false);
        }}
      >
        {selection2 ? (
          <div>
            <div>selection2</div> React is the library for web and native user
            interfaces. Build user interfaces out of individual pieces called
            components written in JavaScript.
          </div>
        ) : (
          <div>selection2</div>
        )}
      </div>
      <div
        className="selection3"
        onClick={() => {
          setSelection3(!selection3);
          setSelection2(false);
        }}
      >
        {selection3 ? (
          <div>
            <div>selection3</div>
            React is the library for web and native user interfaces. Build user
            interfaces out of individual pieces called components written in
            JavaScript.{" "}
          </div>
        ) : (
          <div> selection3</div>
        )}
      </div> */}
      <Rating />
    </div>
  );
}

export default App;
