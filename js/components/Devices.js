import React from 'react';

export default class Devices extends React.Component {

	render() {
		return (
			<div>
				<Device />				
			</div>
		)
	}
}

class Device extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		}
	}
	handleExpandClick() {
		this.setState({
			expanded: !this.state.expanded
		});
	}
	render () {
		var styles = {
			width: "100px",
			border: "solid 1px black",
			height: (this.state.expanded) ? "200px" : "50px"
		};
		return (
			<div style={styles}>
				<button style={{width: "100%"}} onClick={this.handleExpandClick.bind(this)} >Laajenna</button>

			</div>
		)
	}
}

class ButtonAction extends React.Component {
	render() {
		return (
			<div>
			
			</div>
		)
	}
}