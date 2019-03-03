import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Admin.css';

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
            <Paper className="Admin">
                <Typography variant="h4">Admin</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedback.map( item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.feeling}</TableCell>
                                <TableCell>{item.understanding}</TableCell>
                                <TableCell>{item.support}</TableCell>
                                <TableCell>{item.comments}</TableCell>
                                <TableCell>
                                    <Button onClick={this.deleteFeedback(item)}>
                                        X
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapReduxState = reduxState => {
	return reduxState;
}

export default connect(mapReduxState)(Admin);