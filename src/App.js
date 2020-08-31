import React from 'react';
import RGBGridContainer from './containers/RGBGridContainer';
import Navbar from './containers/Navbar';

function App() {
  return (
    <div className="App">
        <h1>The Great <span className="colorDisplay"></span> Color Game</h1>
        <Navbar />
        <RGBGridContainer />
    </div>
  );
}

export default App;
