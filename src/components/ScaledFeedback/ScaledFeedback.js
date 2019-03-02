import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

/** Scaled Feedback is a generic component which can handle any numerical feedback.
 * For now I'm just hard coding the range as 1-5. The title and description are passed in as props.
 */
class ScaledFeedback extends Component {

	state = {
		rating: '3',
	}

	onInputChanged = event => {
		console.log(event.target.value)
		this.setState({rating: event.target.value});
	}

	onSubmit = event => {

		// Prevent the default action for form submission - reloading the page
		event.preventDefault();

		// Dispatch the change to the redux state
		this.props.dispatch({
			type: 'FEEDBACK_UPDATE',
			propertyName: this.props.nameInRedux,
			propertyValue: this.state.rating,
		})
	}

	// Returns an array of JSX radio button inputs.
	createRadioButtons = (start, qty, name) => {

		let radioArray = [];

		for (let i = start; i < start + qty; i++) {
			radioArray.push(
				<span key={i}>
					<input 
						type="radio" 
						name={name} 
						value={i} 
						onChange={this.onInputChanged}
					/>{i}
				</span>
			);
		}

		return radioArray;
	}


	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
				<form onSubmit={this.onSubmit}>
					{this.createRadioButtons(1, 5, 'rating')}
					<br/>
					<button>Submit</button>
				</form>
				<Review />
				<Link to={this.props.back}><button>Back</button></Link>
				<Link to={this.props.next}><button>Next</button></Link>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(ScaledFeedback);
