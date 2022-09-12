import React from "react";
import { Fragment } from "react";

const Button = (props) => {
  return (
    <Fragment>
      <div className="orien">
        <h2 className="text-dark text-center">Choose orientation</h2>
        <div className="flex items-center justify-center p-2 gap-2 flex-wrap md:gap-5">
          <button
            className="btn bg-dark rounded-pill ms-1"
            title="to top"
            onClick={() => props.changeOrientation("to top")}
          >
            <img src={props.arrow} alt="arrow to top" />
          </button>

          <button
            className=" btn bg-dark rounded-pill ms-1"
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
            className=" btn bg-dark rounded-pill ms-1"
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
            className=" btn bg-dark rounded-pill ms-1"
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
            className=" btn bg-dark rounded-pill ms-1"
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
            className=" btn bg-dark rounded-pill ms-1"
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
            className=" btn bg-dark rounded-pill ms-1"
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
            className=" btn bg-dark rounded-pill ms-1"
            title="to left top"
            onClick={() => props.changeOrientation("to left top")}
          >
            <img
              src={props.arrow}
              alt="arrow to left top"
              className="transform -rotate-45"
            />
          </button>
          <br />

          <button
            className=" btn bg-dark rounded-pill ms-1 mt-2"
            onClick={() => props.changeOrientation("circle")}
          >
            <img
              src={props.radial}
              alt="radial"
              className="px-1.5 transform rotate-180"
            />
          </button>
          <button
            className=" btn bg-dark rounded-pill ms-1"
            onClick={() => props.changeOrientation("conic")}
          >
            <img
              src={props.radial}
              alt="radial"
              className="px-1.5 transform rotate-0"
            />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Button;
