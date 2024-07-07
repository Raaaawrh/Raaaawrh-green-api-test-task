import React from "react";

import { Label } from "./Label"

import '../css/OutputPanel.css';

/**
 * Компонент панели вывода.
 */
export class OutputPanel extends React.Component {
    render() {
        return (
            <div className="OutputPanel">
                <Label text="Response:" />
                <pre >{this.props.content || 'Responses to be shown here.'}</pre>
            </div>
        );
    }
}