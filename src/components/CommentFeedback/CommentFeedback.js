import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import './CommentFeedback.css';

// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';


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
                <Card className="input-card">
                    <TextField 
                        className="comments"
                        type="text" 
                        rowsMax="8"
                        multiline
                        onChange={this.onInputChanged}
                        variant="outlined"
                        helperText="Any comments you want to leave?"
                    />
                    <div className="nav-container">
                        <Link to={this.props.back}>
                            <Button className="nav-button">Back</Button>
                        </Link>
                    </div>
                </Card>
                <Review />

			</div>
            
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(CommentFeedback);