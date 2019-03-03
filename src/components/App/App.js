import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ScaledFeedback from '../ScaledFeedback/ScaledFeedback';
import Splash from '../Splash/Splash';
import CommentFeedback from '../CommentFeedback/CommentFeedback';

// The routes in App are rendered a little bit differently, using 
// react-router's 'render' prop. This way I can pass props into just one 
// feedback component, rather than creating a different component for each
// of the feedback pages. 
// Thanks to https://tylermcginnis.com/react-router-pass-props-to-components/

class App extends Component {


	render() {


		let feelings = <ScaledFeedback 
			title='Feelings' 
			description='How are you feeling today?'
			nameInRedux='feelings'
			back='/'
			next='/understanding'
			/>;

		let understanding = <ScaledFeedback 
			title='Understanding' 
			description='How well did you understand the content?'
			nameInRedux='understanding'
			back='/feelings'
			next='/support'
			/>;

		let support = <ScaledFeedback 
			title='Support' 
			description='How well do you feel supported by the staff today?'
			nameInRedux='support'
			back='/understanding'
			next='/comments'
			/>;

		let comments = <CommentFeedback
			back='/support'
			next='/' />

		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">Feedback!</h1>
						<h4><i>Don't forget it!</i></h4>
					</header>
					<br />

					<Route exact path='/' component={Splash} />

					<Route
						path='/feelings'
						render={() => feelings }
					/>

					<Route
						path='/understanding'
						render={() => understanding }
					/>

					<Route
						path='/support'
						render={() => support }
					/>

					<Route
						path='/comments'
						render = {() => comments}
					/>


				</div>
			</Router>
		);
	}
}

export default App;
