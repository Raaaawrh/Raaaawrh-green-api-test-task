import React from "react";

import '../css/ProtectedField.css';

/**
 * Компонент поля ввода токена.
 */
export class ProtectedField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            showContent: false
        };
    }

    // Обработчик изменения текста в поле ввода.
    handleChange = (e) => {
        const content = e.target.value;
        this.setState({ content });
        this.props.onChange(content);
    }
    
    // Обработчик переключения маскировки ввода
    handleButtonClick = () => {
        this.setState({showContent: !this.state.showContent})
    }

    render() {
        return (
            <div className="ProtectedFieldPair">
                <input placeholder={this.props.placeholder} className="ProtectedField" id={this.props.id} type={this.state.showContent ? "text": "password"} value={this.state.content} onChange={this.handleChange}></input>
                <button className="ProtectedFieldButton" onClick={this.handleButtonClick}/>
            </div>
        );
    }
}