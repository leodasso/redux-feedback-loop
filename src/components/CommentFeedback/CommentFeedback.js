import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import axios from 'axios';


class CommentFeedback extends Component {



    onSubmit = () => {

        console.log('feedback submitted');

        // Send the full feedback object to the server with axios
        // axios.post()
        console.log(this.props);

        // redirect the user to the 'feedback submitted' page

    }

	render() {
		return (
			<div>
                <p>Any comments you want to leave?</p>
                <input type="text"/>
                <Review />
				<Link to={this.props.back}><button>Back</button></Link>
				<button onClick={this.onSubmit}>Submit</button>
			</div>
            
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(CommentFeedback);
