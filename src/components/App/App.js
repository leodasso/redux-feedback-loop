import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Review from '../Review/Review';
import ScaledFeedback from '../ScaledFeedback/ScaledFeedback';

// The routes in App are rendered a little bit differently, using 
// react-router's 'render' prop. This way I can pass props into just one 
// feedback component, rather than creating a different component for each
// of the feedback pages. 
// Thanks to https://tylermcginnis.com/react-router-pass-props-to-components/

class App extends Component {


	render() {


		let feelingsComponent = <ScaledFeedback 
			title='Feelings' 
			description='How are you feeling today?'
			nameInRedux='feelings'/>;


		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">Feedback!</h1>
						<h4><i>Don't forget it!</i></h4>
					</header>
					<br />

					{/* How are you feeling feedback page */}
					<Route
						path='/feedback-feelings'
						render={() => feelingsComponent }
					/>


					<Review />
				</div>
			</Router>
		);
	}
}

export default App;
