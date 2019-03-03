import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class CommentFeedback extends Component {

    state = {
        submitted: false,
    }

    onSubmit = () => {

        console.log('feedback submitted');

        // Send the full feedback object to the server with axios
        axios.post('/feedback', this.props.feedback)

        .then( () => {
            // redirect the user to the 'feedback submitted' page
            this.setState({submitted: true});
        })

    }

    onInputChanged = event => {

        this.props.dispatch({
            type: 'FEEDBACK_UPDATE',
            propertyName: 'comments',
            propertyValue: event.target.value,
        })
    }



	render() {


        if (this.state.submitted) {
            return <Redirect to='/thanks'/>
        }

		return (
			<div>
                <p>Any comments you want to leave?</p>
                <input type="text" onChange={this.onInputChanged}/>
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
