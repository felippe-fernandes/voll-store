import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Not Found/NotFound'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login/> } />
      {/* <Route exact path="/foods" element={ Foods } />       */}
      <Route path="*" element={ NotFound } />
    </Routes>
  );
}

export default App;
