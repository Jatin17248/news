import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state ={
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
        color='#0d6efd'
        progress={this.state.progress}
        height={5}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} key="general"  country="in" pageItem="6" category="general"/>}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress={this.setProgress} key="business"  country="in" pageItem="6" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News setProgress={this.setProgress} key="entertainment"  country="in" pageItem="6" category="entertainment" />}
            />
            <Route
              exact
              path="/general"
              element={<News setProgress={this.setProgress} key="general"  country="in" pageItem="6" category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News setProgress={this.setProgress} key="health" country="in" pageItem="6" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress={this.setProgress} key="science"  country="in" pageItem="6" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress} key="sports"  country="in" pageItem="6" category="sports" />}
            />
              <Route
              exact
              path="/technology"
              element={<News setProgress={this.setProgress} key="technology"  country="in" pageItem="6" category="technology" />} 

            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
