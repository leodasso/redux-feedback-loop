import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Admin extends Component {

    state = {
        feedback: [],
    }


    componentDidMount() {
        // When the component mounts, we want to get all the feedback from the server
        // so it can be displayed on the table.
        this.refreshTable();
    }

    refreshTable = () => {

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


    // Deletes the given feedback item from the server. This function is
    // curried so it can be used with an event listener.
    deleteFeedback = feedback => () => {

        console.log('delete', feedback);
        axios.delete('/feedback/' + feedback.id)

        .then(this.refreshTable)

        .catch(error => {
            alert('There was a problem communicating with the server. Try again in a few minutes!');
            console.log('error with DELETE route /feedback/:id', error);
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
                                <td>
                                    <button onClick={this.deleteFeedback(item)}>
                                        X
                                    </button>
                                </td>
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