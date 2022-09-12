import React from "react";

const Code = (props) => {
  return (
    <div className="card">
      <div className="card-header text-start">
        <span className="text-dark">CSS</span>
      </div>
      <div className="card-body break-all mt-4 p-2  outline-0">
        <div className="copycode ">
          <form>
            <textarea
              // disabled
              className="box w-100 text-dark break-all p-2 mb-2"
              ref={props.textAreaRef}
              value={"background-image: " + props.cssCode}
            />
          </form>
          <div>
            <button
              className="btn btn-danger rounded-full"
              onClick={props.copyToClipboard}
            >
              Copy Code
            </button>
            {props.copySuccess}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
