import React, { Component } from 'react';

export default class RGBGridContainer extends Component {

    constructor(props){
        super(props)
        this.state = { colors: this.props.state }
    }

    changeColorsOnCorrectChoice = (color) => {
        let allSquares = document.querySelectorAll(".square");
        for(let i = 0; i < this.state.colors.length; i++){
            allSquares[i].style.backgroundColor = color;
        }
    }

    componentDidMount(){
        const squares = document.querySelectorAll(".square");
        const pickedColor = this.state.colors[Math.floor(Math.random()*6)]
        const colorDisplay = document.querySelector(".colorDisplay");
        let messageDisplay = document.querySelector("#message");

        colorDisplay.textContent = pickedColor;

        for(let i = 0; i < this.state.colors.length; i++){
            // Assigns colors to squares
            squares[i].style.backgroundColor = this.state.colors[i]

            // Adds event listeners to the squares
            squares[i].addEventListener("click", () => {
                // Grabs color of clicked square
                const clickedColor = squares[i].style.backgroundColor;

                // compares the clickedColor to pickedColor
                if(clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct!";
                    messageDisplay.style.color = "lightgreen";
                    this.changeColorsOnCorrectChoice(clickedColor);
                } else {
                    squares[i].style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try again.";
                }
            })
        }
    }

    render() {
        console.log(this.props.state)
        return (
            <div className="container">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
        )
    }
}
