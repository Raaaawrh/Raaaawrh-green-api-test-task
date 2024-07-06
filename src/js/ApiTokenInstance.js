import React from "react";

import '../css/ApiTokenInstance.css';

/**
 * Компонент поля ввода токена.
 */
export class ApiTokenInstance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiTokenInstance: ''
        };
    }

    // Обработчик изменения текста в поле ввода.
    handleChange = (e) => {
        const apiTokenInstance = e.target.value;
        this.setState({ apiTokenInstance });
        this.props.onChange(apiTokenInstance);
    }

    render() {
        return (
            <div className="ApiTokenInstance">
                <label>ApiTokenInstance</label>
                <input type="text" value={this.state.apiTokenInstance} onChange={this.handleChange} />
            </div>
        );
    }
}