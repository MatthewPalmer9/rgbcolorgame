import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="stripe">
                <div className="msgContainer">
                    <button id="reset">NEW COLORS</button>
                    <span id="message"></span>
                </div>
            </div>
        )
    }
}
