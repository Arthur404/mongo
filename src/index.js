import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScrollToTop from './components/Global/ScrollToTop'
import App from './App.js';

ReactDOM.render(
  <Router>
      <Route render={({ location }) => (
          <ScrollToTop location={location}>
              <App location={location}/>
          </ScrollToTop>
      )}/>
  </Router>,
  document.getElementById("root")
);