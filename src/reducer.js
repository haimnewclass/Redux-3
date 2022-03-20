import {reducerStatus} from './reducerStatus';
import {reducerCounter} from './reducerCounter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter:reducerCounter,
    status:reducerStatus,
})

export default allReducers;