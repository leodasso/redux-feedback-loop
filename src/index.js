import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';

/**This is a reducer for all the feedback in a session. 
 * For action `FEEDBACK_UPDATE`, action should have a `propertyName` and 
 * a `propertyValue`.
*/
let feedback = (state = {}, action) => {

    if (action.type==='FEEDBACK_UPDATE') {
        return {...state, [action.propertyName]: action.propertyValue};
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({feedback})
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
