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
	        <div className="col-sm-12 col-lg-6">
    	      <div className="card fluid">
        	    <div className="section">
					<h3>{this.props.title}</h3>
					<div className='game-container'>
						<div className={gameClasses}
							onClick={this.handleClick}>
							<img className="original cover" src={this.props.original} alt="Original Cover" />
							<img className="reverse cover" src={this.props.reverse} alt="Reverse Cover" />
						</div>
					</div>
				</div>
			  </div>
			</div>
		)
	}
}

export default Game;