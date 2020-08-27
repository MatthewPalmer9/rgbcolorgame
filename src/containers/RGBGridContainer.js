import React, { Component } from 'react';

export default class RGBGridContainer extends Component {

    constructor(){
        super()
        this.state = {
            colors: [
                "rgb(255, 0, 0)",
                "rgb(255, 255, 0)",
                "rgb(0, 255, 0)",
                "rgb(0, 255, 255)",
                "rgb(0, 0, 255)",
                "rgb(255, 0, 255)"
            ]
        }
    }

    componentDidMount(){
        const squares = document.querySelectorAll(".square");
        const pickedColor = this.state.colors[3];
        const colorDisplay = document.querySelector(".colorDisplay");

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
                    alert("Correct!");
                } else {
                    squares[i].style.backgroundColor = "#232323";
                    alert("Incorrect");
                }
            })
        }
    }

    render() {
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
