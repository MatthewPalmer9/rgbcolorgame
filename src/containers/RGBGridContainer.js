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
        let squares = document.querySelectorAll(".square");
        for(let i = 0; i < this.state.colors.length; i++){
            squares[i].style.backgroundColor = this.state.colors[i]
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
