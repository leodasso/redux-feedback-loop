import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Admin extends Component {

    state = {
        feedback: [],
    }


    componentDidMount() {

        axios.get('/feedback')

        .then( response => {
            console.log('response from get route', response)
            this.setState({feedback: response.data});
        })

        .catch( error => {
            alert('There was a problem getting feedback info from the server. Try again in a few minutes!');
            console.log('error with GET route /feedback', error);
        })
    }


    render() {

        return (
            <div>
                <h2>Admin</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map( item => (
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td>X</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Admin);