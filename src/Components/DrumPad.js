import React from 'react';

class DrumPad extends React.Component {
	constructor() {
		super();
		this.playSound = this.playSound.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.changeStyle = this.changeStyle.bind(this);
		this.state = {
			active: false
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	changeStyle() {
		const currentState = this.state.active;
		this.setState({active: true}, () => {
			setTimeout(() => this.setState({active: false}), 200)
		});
	}

	handleKeyPress(e) {
		if(e.keyCode === this.props.keyCode) {
			this.playSound();
		}
	}

	playSound(e) {
		let sound = document.getElementById(this.props.keyTrigger);
		sound.currentTime = 0;
		sound.play();
		this.changeStyle();
		console.log(this.props.keyTrigger);
		this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
	}

	render() {
		return (
			<div className={this.state.active ? 'drum-pad pressed' : 'drum-pad'} id={this.props.clipId} onClick={this.playSound}>
				<audio className="clip" id={this.props.keyTrigger} src={this.props.clip}></audio>
				{this.props.keyTrigger}
			</div>
		)
	}
}

export default DrumPad;