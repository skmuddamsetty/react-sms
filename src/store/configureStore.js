import {
    createStore,
    combineReducers
} from 'redux';
import studentReducer from '../reducers/student';
export default () => {
    const store = createStore(
        combineReducers({
            students: studentReducer
        })
    );
    return store;
};