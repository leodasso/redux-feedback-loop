import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import './ScaledFeedback.css';

// Material UI
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';

/** Scaled Feedback is a generic component which can handle any numerical feedback.
 * For now I'm just hard coding the range as 1-5. The title, description, redux store, etc are passed in as props. */
class ScaledFeedback extends Component {

	// When the user selects a radio button, we want to update the redux store with its value.
	onInputChanged = event => {

		// Dispatch the change to the redux state
		this.props.dispatch({
			type: 'FEEDBACK_UPDATE',
			propertyName: this.props.nameInRedux,
			propertyValue: event.target.value,
		})
	}

	// Returns true/false based on if the given index (1-5) is already selected.
	isIndexSelected = index => {
		let currentRating = this.props.feedback[this.props.nameInRedux];
		return Number(currentRating) === index;
	}

	// Returns an array of JSX radio button inputs.
	// Start: what number the array starts at. For example, 1, 2, 3, 4 5 this would be 1
	// qty: how many buttons
	createRadioButtons = (start, qty, name) => {

		let radioArray = [];

		for (let i = start; i < start + qty; i++) {

			radioArray.push(
				<span key={i}>
					<Radio 
						name={name} 
						value={i} 
						onChange={this.onInputChanged} 
						checked={this.isIndexSelected(i)}
					/>{i}
				</span>
			);
		}

		return radioArray;
	}


	render() {
		return (
			<div>
				<Card className="input-card">
					<Typography variant="h4">{this.props.title}</Typography>
					<Typography variant="body1">{this.props.description}</Typography>
					<br/>

					<form>
						{this.createRadioButtons(1, 5, 'rating')}
					</form>
					</Card>
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