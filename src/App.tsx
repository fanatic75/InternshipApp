import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
        <div className="App">
          <Routes />
        </div>
    </Router>
  );
}

export default App;
