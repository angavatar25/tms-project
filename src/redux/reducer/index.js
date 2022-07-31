import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const reducerIndex = combineReducers({
    dataReducer,
})

export default reducerIndex;