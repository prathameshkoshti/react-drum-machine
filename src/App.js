import React from 'react';
import './App.css';
import PadBank from './Components/PadBank'
import Display from './Components/Display';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			display: 'Display'
		}
	}

	updateDisplay = (displayValue) => {	
		this.setState({
			display: displayValue
		});
	}

	render() {
		return (
			<div id="drum-machine">
				<Display display={this.state.display} />
				<PadBank updateDisplay={this.updateDisplay} />
			</div>
		)
	}
}

export default App;
