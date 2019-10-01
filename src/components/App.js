import React from 'react';
import Routes from '../components/routes'
import {BrowserRouter} from 'react-router-dom'

import '../components/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
