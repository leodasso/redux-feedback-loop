import React, { Component } from 'react';
import { connect } from 'react-redux';

/** Scaled Feedback is a generic component which can handle any numerical feedback.
 * For now I'm just hard coding the range as 1-5. The title and description are passed in as props.
 */
class ScaledFeedback extends Component {

	onInputChanged = event => {
		console.log(event.target.value)

		// Dispatch the change to the redux state
		this.props.dispatch({
			type: 'FEEDBACK_UPDATE',
			propertyName: this.props.nameInRedux,
			propertyValue: event.target.value,
		})
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
				<input placeholder='rate 1-5' type='number' onChange={this.onInputChanged} />
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(ScaledFeedback);
