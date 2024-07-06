import React from "react";

import '../css/ApiTokenInstance.css';

export class ApiTokenInstance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiTokenInstance: ''
        };
    }

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