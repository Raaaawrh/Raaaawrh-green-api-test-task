import React from "react";

import '../css/Button.css';

/**
 * Компонент кнопки GetSettings.
 */
export class Button extends React.Component {
    render() {
        return (
            <button className="Button" onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}