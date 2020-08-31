import React from 'react';
import RGBGridContainer from './containers/RGBGridContainer';
import Navbar from './containers/Navbar';

function App() {
  const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`
    // let randomColor = Math.floor(Math.random() * this.state.colors.length)
    return randomColor
  }

  const generateStateColors = () => {
    let newArray = [];
    for(let i = 0; i < 6; i++){
        newArray.push(randomColor())
    }
    return newArray
  }

  return (
    <div className="App">
        <h1>THE GREAT <p></p><span className="colorDisplay"></span><p></p>GUESSING GAME</h1>
        <Navbar />
        <RGBGridContainer state={generateStateColors()} />
    </div>
  );
}

export default App;
