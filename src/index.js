import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';

// The path the user will take when moving through the feedback
let navPathway = [ 'landing', 'feelings', 'understanding', 'support', 'comments', 'confirmation'];

/**This is a reducer for all the feedback in a session. For action `FEEDBACK_UPDATE`, 
 * action should have a `propertyName` and  a `propertyValue`. */
let feedback = (state = {}, action) => {

    if (action.type==='FEEDBACK_UPDATE') {
        return {...state, [action.propertyName]: action.propertyValue};
    }
    return state;
}

let userPlace = (state = 0, action) => {

    switch (action.type) {

        case 'NEXT_PAGE': 
            // if already at the last page, return to the first page.
            if (state >= navPathway.length - 1) {
                return 0;
            }
            return state + 1;

        case 'PREV_PAGE':
            // if already at the first page, return the last page
            if (state <= 0) {
                return navPathway.length - 1;
            }
            return state - 1;

        default: return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        feedback,
        userPlace,
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
