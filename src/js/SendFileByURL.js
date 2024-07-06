import React from "react";

import '../css/SendFileByURL.css';

export class SendFileByURL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            fileURL: ''
        };
    }

    handlePhoneNumberCharge = (e) => {
        const phoneNumber = e.target.value;
        this.setState({ phoneNumber });
        this.props.onPhoneNumberChange(phoneNumber);
    }

    handleFileURLChange = (e) => {
        const fileURL = e.target.value;
        this.setState({ fileURL });
        this.props.onFileURLChange(fileURL);
    }

    render() {
        return (
            <div className="SendFileByURL">
                <input type="text" placeholder="Phone Number (Only Digits)" onChange={this.handlePhoneNumberCharge} />
                <input type="text" placeholder="https://mysite.com/img/horse.png" onChange={this.handleFileURLChange} />
                <button onClick={this.props.onClick}>Send File By URL</button>
            </div>
        );
    }
}