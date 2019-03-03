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
		this.setState({rating: event.target.value});

		// Dispatch the change to the redux state
		this.props.dispatch({
			type: 'FEEDBACK_UPDATE',
			propertyName: this.props.nameInRedux,
			propertyValue: event.target.value,
		})
	}

	// Returns true/false for a radio button of the given index if it's already selected.
	conditionalCheckedAttribute = index => {
		let currentRating = this.props.feedback[this.props.nameInRedux];
		return (Number(currentRating) == index);
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
						checked={this.conditionalCheckedAttribute(i)}
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
				<form>
					{this.createRadioButtons(1, 5, 'rating')}
					<br/>
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