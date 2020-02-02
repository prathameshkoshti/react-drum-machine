import React from 'react';
import DrumPad from './DrumPad';
import {pads} from '../drumPads'

class PadBank extends React.Component {

	renderDrumPad = pads.map((drumPad) => {
		return (
			<DrumPad
				clipId={drumPad.id}
				clip={drumPad.url}
				keyTrigger={drumPad.keyTrigger}
				keyCode= {drumPad.keyCode}
				key={drumPad.id}
				updateDisplay={this.props.updateDisplay}
			/>
		);
	});

	render() {
		return (
			<div className="pad-bank" >
				{this.renderDrumPad}
			</div>
		);
	}
}

export default PadBank;