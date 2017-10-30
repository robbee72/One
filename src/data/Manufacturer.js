import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './Manufacturer.css';

class Manufacturer extends Component {
	render() {
		const { name, votes, user, handleSelect, handleDeselect } = this.props;
		const userHasSelected = votes && Object.keys(votes).includes(user.uid);

		return (
			<article className="Manufacturer">
				<h2 className="Manufacturer--name">{name}</h2>
				<p className="Manufacturer--count">
					Total Votes: {(votes && Object.keys(votes).length) || 0}
				</p>
				<ul className="Manufacturer--votes">
					{votes && map(votes, (user, key) => <li key={key}>{user}</li>)}
				</ul>
				{userHasSelected ? (
					<button onClick={handleDeselect} className="block destructive">
						Actually, no
					</button>
				) : (
					<button onClick={handleSelect} className="block">
						I'd go here
					</button>
				)}
			</article>
		);
	}
}
Manufacturer.propTypes = {
	name: PropTypes.string.isRequired,
	votes: PropTypes.object,
	user: PropTypes.object,
	handleSelect: PropTypes.func.isRequired,
	handleDeselect: PropTypes.func.isRequired
};
export default Manufacturer;
