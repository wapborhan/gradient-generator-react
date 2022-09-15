import React, { Component } from "react";
import HOVER_BUTTON from "./buttondata";

export default class index extends Component {
  state = {
    hoverButton: HOVER_BUTTON,
  };

  render() {
    return (
      <div className="container topbarpt">
        <div className="row">
          {this.state.hoverButton.map((item) => {
            const code = item.code;
            return (
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <button
                      className="btn btnsr text-light w-100"
                      style={{
                        background: `${item.code}`,
                      }}
                    >
                      {item.text}
                    </button>
                  </div>
                  <div className="copy d-flex justify-content-end">
                    {/* <button className="btn btn-warning rounded-pill me-3 mb-3">
                      COPY
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
