import { InputPanel } from './js/InputPanel'
import { OutputPanel } from './js/OutputPanel'

import React from 'react';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ''
		}
	}

	handleInputContentChange = (inputContent) => {
		this.setState({ content: JSON.stringify(inputContent, null, 2) });
		console.log(inputContent);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className='container'>
						<InputPanel onChange={this.handleInputContentChange} />
						<OutputPanel content={this.state.content} />
					</div>
				</header>
			</div>
		);
	}
}

export default App;
