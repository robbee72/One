import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Manufacturer from './Manufacturer';
import map from 'lodash/map';
import { database } from './firebase';
import './Manufacturers.css';

class Manufacturers extends Component {
	constructor(props) {
		super(props);
	}

	handleSelect(key) {
		const currentUser = this.props.user;
		database
			.ref('/manufacturers')
			.child(key)
			.child('votes')
			.child(currentUser.uid)
			.set(currentUser.displayName);
	}

	handleDeselect(key) {
		const currentUser = this.props.user;
		database
			.ref('/manufacturers')
			.child(key)
			.child('votes')
			.child(currentUser.uid)
			.remove();
	}

	render() {
		const { user, manufacturers } = this.props;
		return (
			<section className="Manufacturers">
				{map(manufacturers, (manufacturer, key) => {
					return (
						<Manufacturer
							key={key}
							{...manufacturer}
							user={user}
							handleSelect={() => this.handleSelect(key)}
							handleDeselect={() => this.handleDeselect(key)}
						/>
					);
				})}
			</section>
		);
	}
}

Manufacturers.propTypes = {
	user: PropTypes.object,
	manufacturersRef: PropTypes.object,
	manufacturers: PropTypes.object
};

export default Manufacturers;
