import "./App.css";
import "./assets/tailwind.css";
import arrow from "./assets/img/arrow.svg";
import radial from "./assets/img/radial.svg";
import { useState, useEffect, useRef } from "react";
import chroma from "chroma-js";

function App() {
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

  function doJob(e) {
    e.preventDefault();
    setColor1(hex.current.value);
    setColor2(hex2.current.value);
  }
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
    <div
      className="flex items-center bg-gray-900 justify-center md:fixed h-screen inset-0 px-10"
      style={ulStyle}
    >
      <div className="px-4 py-6">
        <h1 className="md:text-5xl text-white font-extrabold text-center text-2xl">
          Generate a CSS Color Gradient
        </h1>
        <h2 className="text-xl text-white text-center py-3 mt-2">
          Choose orientation
        </h2>

        <div className="flex items-center justify-center p-2 gap-2 flex-wrap md:gap-5">
          <button
            className="srcircle"
            title="to top"
            onClick={() => changeOrientation("to top")}
          >
            <img src={arrow} alt="arrow to top" />
          </button>

          <button
            className="srcircle"
            title="to right top"
            onClick={() => changeOrientation("to right top")}
          >
            <img
              src={arrow}
              alt="arrow to right top"
              className="transform rotate-45"
            />
          </button>

          <button
            className="srcircle"
            title="to right"
            onClick={() => changeOrientation("to right")}
          >
            <img
              src={arrow}
              alt="arrow to right"
              className="transform rotate-90"
            />
          </button>

          <button
            className="srcircle"
            title="to right bottom"
            onClick={() => changeOrientation("to right bottom")}
          >
            <img
              src={arrow}
              alt="arrow to right bottom"
              className="rotate-135"
            />
          </button>

          <button
            className="srcircle"
            title="to bottom"
            onClick={() => changeOrientation("to bottom")}
          >
            <img
              src={arrow}
              alt="arrow to bottom"
              className="transform rotate-180"
            />
          </button>

          <button
            className="srcircle"
            title="to bottom left"
            onClick={() => changeOrientation("to bottom left")}
          >
            <img
              src={arrow}
              alt="arrow to bottom left"
              className="rotate-225"
            />
          </button>

          <button
            className="srcircle"
            title="to left"
            onClick={() => changeOrientation("to left")}
          >
            <img
              src={arrow}
              alt="arrow to left"
              className="transform -rotate-90"
            />
          </button>

          <button
            className="srcircle"
            title="to left top"
            onClick={() => changeOrientation("to left top")}
          >
            <img
              src={arrow}
              alt="arrow to left top"
              className="transform rotate-180"
            />
          </button>

          <button
            className="srcircle"
            onClick={() => changeOrientation("circle")}
          >
            <img src={radial} alt="radial" className="px-1.5" />
          </button>
        </div>

        <h2 className="text-xl text-white text-center py-3 mt-5 italic font-cursive">
          Choose Color
        </h2>
        <div className="text-white text-center py-2 rounded mb-3  text-white w-40 mx-auto">
          <h2 className="bg-amber-700">{error}</h2>
        </div>

        <div className="flex items-center justify-center flex-wrap">
          <form className="flex gap-5 justify-center items-center flex-wrap">
            <input
              type="color"
              ref={hex}
              defaultValue={color1}
              style={icolor1}
              className="rounded text-center shadow-2xl w-28 h-12"
              name="hex"
              onChange={(e) => setColor1(e.target.value)}
            />

            <input
              type="color"
              ref={hex2}
              defaultValue={color2}
              style={icolor2}
              className="rounded text-center shadow-2xl w-28 h-12"
              name="hex2"
              onChange={(e) => setColor2(e.target.value)}
            />

            <input type="submit" className="hidden" onClick={(e) => doJob(e)} />
          </form>
        </div>

        <div className="box md:w-[640px] w-[350px] h-auto mx-auto break-all mt-4 p-2 ">
          <p className="p-3 text-gray-200 font-mono text-base md:text-xl text-center font-semibold">
            <form>
              <textarea
                disabled
                className="box md:w-[600px] w-[300px] h-auto mx-auto break-all mt-4 p-2 text-gray-100 outline-0"
                ref={textAreaRef}
                value={"background-image: " + cssCode}
              />
            </form>
            <div>
              <button
                className="bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                onClick={copyToClipboard}
              >
                Copy Code
              </button>
              {copySuccess}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
