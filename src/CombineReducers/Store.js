import { createStore, combineReducers } from 'redux';

import Reducer from './Reducer';
import Reducer2 from './Reducer2';

const rootReducer = combineReducers({
    Reducer,
    Reducer2
});

export default createStore(rootReducer);
