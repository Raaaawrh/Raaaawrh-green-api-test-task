import React from "react";


import "../css/Label.css"


export class Label extends React.Component {
    render() {
        return (
            <label className="Label">{this.props.text}</label>
        );
    }
}