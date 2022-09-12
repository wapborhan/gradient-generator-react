import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/stylesheet/sidebar.css";

//Components
import Sidebar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Home, GradientButton } from "./pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar isActive={this.state.isActive} />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar
                isActive={this.state.isActive}
                handleToggle={this.handleToggle}
              />
              <Routes>
                {/* <Route path="/" element={<Navigate replace to="/sura" />} /> */}
                <Route path="/" exact element={<Home />} />
                <Route path="/button" element={<GradientButton />} exact />

                <Route path="*" element={<Home />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
