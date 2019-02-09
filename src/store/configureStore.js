import { createStore, combineReducers } from 'redux';
import expensesReducer                  from '../reducers/expenses';
import filtersReducer                   from '../reducers/filters';
//-------------------- imports -----------------------------------------------


export default () => {
    const store = createStore (
        // combine mutiple reducers to s single store
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        // for react-devtools-extensions in Chrome:
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;    
};
