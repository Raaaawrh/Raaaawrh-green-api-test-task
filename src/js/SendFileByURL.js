import React from "react";

import '../css/SendFileByURL.css';
import { Button } from "./Button";

/**
 * Компонент отправки файла. Содержит текстовые поля и кпопку для отправки.
 */
export class SendFileByURL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            fileURL: '',
            fileName: ''
        };
    }

    // Обработчик изменения phoneNumber.
    handlePhoneNumberCharge = (e) => {
        const phoneNumber = e.target.value;
        this.setState({ phoneNumber });
        this.props.onPhoneNumberChange(phoneNumber);
    }

    // Обработчик изменения fileURL.
    handleFileURLChange = (e) => {
        const fileURL = e.target.value;
        this.setState({ fileURL });
        this.props.onFileURLChange(fileURL);
    }

    // Обработчик изменения fileName
    handleFileNameChange = (e) => {
        const fileName = e.target.value;
        this.setState({ fileName });
        this.props.onFileNameChange(fileName);
    }

    render() {
        return (
            <div className="SendFileByURL">
                <input type="text" placeholder="Phone Number (Only Digits)" onChange={this.handlePhoneNumberCharge} />
                <input type="text" placeholder="https://mysite.com/img/horse.png" onChange={this.handleFileURLChange} />
                <input type="text" placeholder="Place here filename with format (Optional)" onChange={this.handleFileNameChange} />
                <Button text="sendFileByURL" onClick={this.props.onClick} />
            </div>
        );
    }
}