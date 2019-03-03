import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';


class CommentFeedback extends Component {

    onInputChanged = event => {

        this.props.dispatch({
            type: 'FEEDBACK_UPDATE',
            propertyName: 'comments',
            propertyValue: event.target.value,
        })
    }

	render() {

		return (
			<div>
                <p>Any comments you want to leave?</p>
                <input type="text" onChange={this.onInputChanged}/>
                <Review />
				<Link to={this.props.back}><button>Back</button></Link>
			</div>
            
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(CommentFeedback);