import React from "react";

import '../css/SendFileByURL.css';

/**
 * Компонент отправки файла. Содержит текстовые поля и кпопку для отправки.
 */
export class SendFileByURL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            fileURL: ''
        };
    }

    // Обработчик изменения Phone Number.
    handlePhoneNumberCharge = (e) => {
        const phoneNumber = e.target.value;
        this.setState({ phoneNumber });
        this.props.onPhoneNumberChange(phoneNumber);
    }

    // Обработчик изменения File URL.
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