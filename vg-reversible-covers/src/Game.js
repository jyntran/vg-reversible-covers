import React, { Component } from 'react';
import classNames from 'classnames';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flipped: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ flipped: !this.state.flipped });
	}

	render() {

		var gameClasses = classNames({
			'game not-flipped' : this.state.flipped === false,
			'game flipped' : this.state.flipped === true
		})

		return (
			<div className='game-container'>
				<div className={gameClasses}
					onClick={this.handleClick}>
						<img className="original cover" src={this.props.original} alt="Original Cover" />
						<img className="reverse cover" src={this.props.reverse} alt="Reverse Cover" />
				</div>
				<div className='game-title'>
					{this.props.title}
				</div>
			</div>
		)
	}
}

export default Game;