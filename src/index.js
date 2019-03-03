import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';

const defaultState = {
    feelings: 0,
    understanding: 0,
    support: 0,
    comments: '',
}


/**This is a reducer for all the feedback in a session. For action `FEEDBACK_UPDATE`, 
 * action should have a `propertyName` and  a `propertyValue`. */
let feedback = (state = defaultState, action) => {

    if (action.type==='FEEDBACK_UPDATE') {
        return {...state, [action.propertyName]: action.propertyValue};
    }

    if (action.type==='FEEDBACK_RESET') {
        return defaultState;
    }

    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback,
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
