import React from "react";
import { IdInstance } from "./IdInstanse";
import { ApiTokenInstance } from "./ApiTokenInstance";
import { GetSettings } from "./GetSettings";
import { GetStateInstance } from './GetStateInstance';
import { SendMessage } from './SendMessage';
import { SendFileByURL } from './SendFileByURL';

import { getSettingsRequest, getStateInstanceRequest, sendFileByURL, sendMessage } from './Api'

import '../css/InputPanel.css';

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

    handleIdInstanceChange = (idInstance) => {
        this.setState({ idInstance });
    }

    handleApiTokenInstanceChange = (apiTokenInstance) => {
        this.setState({ apiTokenInstance });
    }

    handlePhoneMessageChange = (phoneNumber) => {
        this.setState({ phoneNumberMessage: phoneNumber });
    }

    handleMessadeTextChange = (messageText) => {
        this.setState({ messageText });
    }

    handlePhoneFileChange = (phoneNumber) => {
        this.setState({ phoneNumberFile: phoneNumber });
    }

    handleFileURLChange = (fileURL) => {
        this.setState({ fileURL });
    }

    handleGetSettingsClick = async () => {
        const content = await getSettingsRequest(this.state.idInstance, this.state.apiTokenInstance);
        this.props.onChange(content);
    }

    handleGetStateInstanceClick = async () => {
        const content = await getStateInstanceRequest(this.state.idInstance, this.state.apiTokenInstance);
        this.props.onChange(content);
    }

    handleSendMessageClick = async () => {
        const content = await sendMessage(this.state.idInstance, this.state.apiTokenInstance, this.state.phoneNumberMessage, this.state.messageText);
        this.props.onChange(content);
    }

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
