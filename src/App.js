import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import CountryDetalist from './Components/CountryDetalist.jsx';





function App() {


  return (

    <div>

      <BrowserRouter>

        <Header />

        <Routes>

          <Route path="/" element={<Main />} />

          <Route path='/CountryDetalist/:name' element={<CountryDetalist />} />

        </Routes>

      </BrowserRouter>



    </div>
  )
}

export default App;
