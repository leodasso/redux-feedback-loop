import React, { Component } from 'react';
import { connect } from 'react-redux';

class Splash extends Component {

    onClickBegin = () => {
        this.props.history.push('/feelings');
    }

	render() {
		return (
			<div>
                <h2>Hello! Let's get started on some feedback.</h2>
                <button onClick={this.onClickBegin}>Begin</button>
			</div>
		);
	}
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Splash);
