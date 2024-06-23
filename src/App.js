import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News country="in" pageItem="6" category="general"/>}
            />
            <Route
              exact
              path="/business"
              element={<News country="in" pageItem="6" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News country="in" pageItem="6" category="entertainment" />}
            />
            <Route
              exact
              path="/general"
              element={<News country="in" pageItem="6" category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News country="in" pageItem="6" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News country="in" pageItem="6" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News country="in" pageItem="6" category="sports" />}
            />
              <Route
              exact
              path="/technology"
              element={<News country="in" pageItem="6" category="technology" />} 
              
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
