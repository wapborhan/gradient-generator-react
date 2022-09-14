import "./App.css";
// import "../../assets/tailwind.css";
import arrow from "../../assets/img/arrow.svg";
import radial from "../../assets/img/radial.svg";
import { useState, useEffect, useRef } from "react";
import chroma from "chroma-js";
import Button from "./Button";
import Color from "./Color";
import Code from "./Code";

function Home() {
  const [color1, setColor1] = useState("#FF6347");
  const [color2, setColor2] = useState("#0000FF");
  const [direction, setDirection] = useState("linear-gradient");
  const [generated1, setGenerated1] = useState("");
  const [generated2, setGenerated2] = useState("");
  const [generated3, setGenerated3] = useState("");
  const [orientation, setOrientation] = useState("to right bottom");
  const [error, setError] = useState("");
  const [invertedcolor1, setinvertedColor1] = useState("");
  const [invertedcolor2, setinvertedColor2] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const hex = useRef(color1);
  const hex2 = useRef(color2);

  const ulStyle = {
    backgroundImage:
      direction +
      "(" +
      orientation +
      "," +
      color1 +
      "," +
      generated1 +
      "," +
      generated2 +
      "," +
      generated3 +
      "," +
      color2 +
      ")",
  };
  const cssCode =
    direction +
    "(" +
    orientation +
    "," +
    color1 +
    "," +
    generated1 +
    "," +
    generated2 +
    "," +
    generated3 +
    "," +
    color2 +
    ");";

  useEffect(() => {
    generateColors();
  });

  const changeOrientation = function (ori) {
    console.log(ori);
    if (ori === "circle") {
      setDirection("radial-gradient");
      setOrientation(ori);
    } else if (ori === "conic") {
      setDirection("conic-gradient");
      setOrientation("from 1turn at 50% 50%");
    } else {
      setDirection("linear-gradient");
      setOrientation(ori);
    }
  };

  const generateColors = function () {
    if (chroma.valid(color1) && chroma.valid(color2)) {
      let word = chroma.scale([color1, color2]).mode("lch").colors(5);
      setGenerated1(word[1]);
      setGenerated2(word[2]);
      setGenerated3(word[3]);

      setinvertedColor1(checkContrast(color1));
      setinvertedColor2(checkContrast(color2));

      setError("");
    } else {
      setError("Color are no valid.");
    }
  };

  function checkContrast(color) {
    const contrast = chroma(color).luminance();
    if (contrast > 0.6) {
      return "#000";
    } else {
      return "#fff";
    }
  }

  // function doJob(e) {
  //   e.preventDefault();
  //   setColor1(hex.current.value);
  //   setColor2(hex2.current.value);
  // }
  //const boxOneStyle = { background: color1; color: }
  const icolor1 = { background: color1, color: invertedcolor1 };
  const icolor2 = { background: color2, color: invertedcolor2 };

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess(alert("Copied"));
  }

  return (
    <div className="container-fluid topbarpt">
      <div className="card text-center">
        <div className="card-header  gradientstop" style={ulStyle}></div>
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <Color
                error={error}
                color1={color1}
                icolor1={icolor1}
                setColor1={setColor1}
                color2={color2}
                icolor2={icolor2}
                setColor2={setColor2}
              />
            </div>
            <div className="col-8">
              <Button
                arrow={arrow}
                radial={radial}
                changeOrientation={changeOrientation}
              />
            </div>
          </div>
        </div>
        <div className="card-footer p-0">
          <Code
            textAreaRef={textAreaRef}
            cssCode={cssCode}
            copyToClipboard={copyToClipboard}
            copySuccess={copySuccess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
