import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Material UI stuff
import Typography from '@material-ui/core/Typography';

import ScaledFeedback from '../ScaledFeedback/ScaledFeedback';
import Splash from '../Splash/Splash';
import CommentFeedback from '../CommentFeedback/CommentFeedback';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';


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

			<>
			{/* Anything in the helmet tags is injected into the html head */}
			<Helmet>
				<title>Leo's Feedback Form</title>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Helmet>

			<Router>
				<div className="App">
					<header className="App-header">
						<Typography variant="h2">Feedback!</Typography>
						<Typography variant="overline">Don't forget it!</Typography>
					</header>
					<br />

					<Route exact path='/' component={Splash} />

					<Route path='/feelings' render={() => feelings } />

					<Route path='/understanding' render={() => understanding } />

					<Route path='/support' render={() => support } />

					<Route path='/comments' render = {() => comments} />

					<Route path='/thanks' component={Thanks}/>

					<Route path='/admin' component={Admin} />

				</div>
			</Router>
			</>
		);
	}
}

export default App;
