import React from "react";

import '../css/SendMessage.css';

export class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            messageText: ''
        };
    }

    handlePhoneNumberChange = (e) => {
        const phoneNumber = e.target.value;
        this.setState({ phoneNumber });
        this.props.onPhoneNumberChange(phoneNumber);
    }

    handleMessageTextChange = (e) => {
        const messageText = e.target.value;
        this.setState({ messageText });
        this.props.onMessageTextChange(messageText);
    }

    render() {
        return (
            <div className="SendMessage">
                <input type="text" placeholder="xxxxxxxxxxx" onChange={this.handlePhoneNumberChange} />
                <textarea placeholder="Type message text here." onChange={this.handleMessageTextChange}></textarea>
                <button onClick={this.props.onClick}>Send Message</button>
            </div>
        );
    }
}