import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class ScaledFeedback extends Component {
  render() {
    return (

        <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <input placeholder={this.props.placeholder} />
        </div>
    );
  }
}

export default ScaledFeedback;
