import React from "react";

import '../css/OutputPanel.css';

/**
 * Компонент панели вывода.
 */
export class OutputPanel extends React.Component {
    render() {
        return (
            <div className="OutputPanel">
                <pre >{this.props.content || 'Responses to be shown here.'}</pre>
            </div>
        );
    }
}