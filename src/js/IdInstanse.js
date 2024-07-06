import React from "react";

import '../css/IdInstance.css';

/**
 * Компонент поля ввода ID.
 */
export class IdInstance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idInstance: ''
        };
    }

    handleChange = (e) => {
        const idInstance = e.target.value;
        this.setState({ idInstance });
        this.props.onChange(idInstance);
    }

    render() {
        return (
            <div className="IdInstance">
                <label>IdInstance</label>
                <input type="text" onChange={this.handleChange} value={this.state.idInstance} />
            </div>
        );
    }
}