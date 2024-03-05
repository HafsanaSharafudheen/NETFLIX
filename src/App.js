import React from 'react';
import Navbar from "./components/navbar/navbar";
import './App.css';

import Banner from './components/banner/banner';
import Rowpost from './components/Rowpost/rowpost';
import {originals,action,comedy,horror} from './urls'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix Originals"/>
      <Rowpost url={action} title="Action" isSmall />
      <Rowpost url={comedy} title="Comedy Movies" isSmall />
      <Rowpost url={horror} title="Horror Movies" isSmall />

    </div>
  );
}

export default App;
