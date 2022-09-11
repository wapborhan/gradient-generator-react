import React from "react";
import { Fragment } from "react";

const Button = (props) => {
  console.log(props);
  return (
    <Fragment>
      <button
        className="srcircle"
        title="to top"
        onClick={() => props.changeOrientation("to top")}
      >
        <img src={props.arrow} alt="arrow to top" />
      </button>

      <button
        className="srcircle"
        title="to right top"
        onClick={() => props.changeOrientation("to right top")}
      >
        <img
          src={props.arrow}
          alt="arrow to right top"
          className="transform rotate-45"
        />
      </button>

      <button
        className="srcircle"
        title="to right"
        onClick={() => props.changeOrientation("to right")}
      >
        <img
          src={props.arrow}
          alt="arrow to right"
          className="transform rotate-90"
        />
      </button>

      <button
        className="srcircle"
        title="to right bottom"
        onClick={() => props.changeOrientation("to right bottom")}
      >
        <img
          src={props.arrow}
          alt="arrow to right bottom"
          className="rotate-135"
        />
      </button>

      <button
        className="srcircle"
        title="to bottom"
        onClick={() => props.changeOrientation("to bottom")}
      >
        <img
          src={props.arrow}
          alt="arrow to bottom"
          className="transform rotate-180"
        />
      </button>

      <button
        className="srcircle"
        title="to bottom left"
        onClick={() => props.changeOrientation("to bottom left")}
      >
        <img
          src={props.arrow}
          alt="arrow to bottom left"
          className="rotate-225"
        />
      </button>

      <button
        className="srcircle"
        title="to left"
        onClick={() => props.changeOrientation("to left")}
      >
        <img
          src={props.arrow}
          alt="arrow to left"
          className="transform -rotate-90"
        />
      </button>

      <button
        className="srcircle"
        title="to left top"
        onClick={() => props.changeOrientation("to left top")}
      >
        <img
          src={props.arrow}
          alt="arrow to left top"
          className="transform -rotate-45"
        />
      </button>

      <button
        className="srcircle"
        onClick={() => props.changeOrientation("circle")}
      >
        <img
          src={props.radial}
          alt="radial"
          className="px-1.5 transform rotate-180"
        />
      </button>
    </Fragment>
  );
};

export default Button;
