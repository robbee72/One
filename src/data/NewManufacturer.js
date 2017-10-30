import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from './firebase';
import './NewManufacturer.css';

class NewManufacturer extends Component {
	constructor() {
		super();
		this.state = {
			name: ''
		};

		this.manufacturersRef = database.ref('/manufacturers');
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.manufacturersRef.push({ name: this.state.name });
	}

	render() {
		const { name } = this.state;

		return (
			<form className="NewManufacturer">
				<input
					type="text"
					value={name}
					placeholder="Name of Fine Establishment"
					onChange={event => this.setState({ name: event.target.value })}
				/>
				<button onClick={this.handleSubmit} disabled={!name}>
					Submit
				</button>
			</form>
		);
	}
}

NewManufacturer.propTypes = {
	manufacturersRef: PropTypes.object
};

export default NewManufacturer;
