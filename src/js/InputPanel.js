import React from "react";
import { IdInstance } from "./IdInstanse";
import { ApiTokenInstance } from "./ApiTokenInstance";
import { GetSettings } from "./GetSettings";
import { GetStateInstance } from './GetStateInstance';
import { SendMessage } from './SendMessage';
import { SendFileByURL } from './SendFileByURL';

import { getSettingsRequest, getStateInstanceRequest, sendFileByURL, sendMessage } from './Api'

import '../css/InputPanel.css';


/**
 * Компонент панели ввода. Объединяет все компоненты ввода и кнопки.
 */
export class InputPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idInstance: '',
            apiTokenInstance: '',
            phoneNumberMessage: '',
            messageText: '',
            phoneNumberFile: '',
            fileURL: ''
        };
    }

    // Обработчик изменения поля ID.
    handleIdInstanceChange = (idInstance) => {
        this.setState({ idInstance });
    }

    // Обработчик изменения поля Token.
    handleApiTokenInstanceChange = (apiTokenInstance) => {
        this.setState({ apiTokenInstance });
    }

    // Обработчик изменения поля Phone Number #1.
    handlePhoneMessageChange = (phoneNumber) => {
        this.setState({ phoneNumberMessage: phoneNumber });
    }

    // Обработчик изменения поля Message.
    handleMessadeTextChange = (messageText) => {
        this.setState({ messageText });
    }

    // Обработчик изменения поля Phone Number #2.
    handlePhoneFileChange = (phoneNumber) => {
        this.setState({ phoneNumberFile: phoneNumber });
    }

    // Обработчик изменения поля File URL.
    handleFileURLChange = (fileURL) => {
        this.setState({ fileURL });
    }

    // Обработчик нажатия на кнопку получения настроек аккаунта и выполнение запроса.
    handleGetSettingsClick = async () => {
        const content = await getSettingsRequest(this.state.idInstance, this.state.apiTokenInstance);
        this.props.onChange(content);
    }

    // Обработчик нажатия на кнопку получения состояния аккаунта и выполнение запроса.
    handleGetStateInstanceClick = async () => {
        const content = await getStateInstanceRequest(this.state.idInstance, this.state.apiTokenInstance);
        this.props.onChange(content);
    }

    // Обработчик нажатия на кнопку отправки сообщения и выполнение запроса.
    handleSendMessageClick = async () => {
        const content = await sendMessage(this.state.idInstance, this.state.apiTokenInstance, this.state.phoneNumberMessage, this.state.messageText);
        this.props.onChange(content);
    }

    // Обработчик нажатия на кнопку отправки файла и выполнение запроса
    handleSendFileByURLClick = async () => {
        const fileName = this.state.fileURL.match(/\w+\.\w+$/) != null && this.state.fileURL.match(/\w+\.\w+$/) ? this.state.fileURL.match(/\w+\.\w+$/)[0] : 'test.jpg'
        console.log(fileName)
        const content = await sendFileByURL(this.state.idInstance, this.state.apiTokenInstance, this.state.phoneNumberFile, this.state.fileURL, fileName);
        this.props.onChange(content);
    }

    render() {
        return (
            <div className="InputPanel">
                <IdInstance onChange={this.handleIdInstanceChange} />
                <ApiTokenInstance onChange={this.handleApiTokenInstanceChange} />
                <GetSettings onClick={this.handleGetSettingsClick} />
                <GetStateInstance onClick={this.handleGetStateInstanceClick} />
                <SendMessage onPhoneNumberChange={this.handlePhoneMessageChange} onMessageTextChange={this.handleMessadeTextChange} onClick={this.handleSendMessageClick} />
                <SendFileByURL onPhoneNumberChange={this.handlePhoneFileChange} onFileURLChange={this.handleFileURLChange} onClick={this.handleSendFileByURLClick} />
            </div>
        );
    }
}
