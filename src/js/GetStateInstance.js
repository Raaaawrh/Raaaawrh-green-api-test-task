import React from "react";

import '../css/GetStateInstance.css';

export class GetStateInstance extends React.Component {
    render() {
        return (
            <div className="GetStateInstance">
                <button onClick={this.props.onClick}>GetStateInstance</button>
            </div>
        );
    }
}