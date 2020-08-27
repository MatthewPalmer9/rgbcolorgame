import React from 'react';
import RGBGridContainer from './containers/RGBGridContainer';

function App() {
  return (
    <div className="App">
        <h1>The Great <span className="colorDisplay"></span> Color Game</h1>
        <RGBGridContainer />
    </div>
  );
}

export default App;
