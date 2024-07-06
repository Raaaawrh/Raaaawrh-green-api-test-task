import React from "react";

import '../css/GetSettings.css';

/**
 * Компонент кнопки GetSettings.
 */
export class GetSettings extends React.Component {
    render() {
        return (
            <div className="GetSettings">
                <button onClick={this.props.onClick}>GetSettings</button>
            </div>
        );
    }
}