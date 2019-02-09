import React              from 'react';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux';
import AppRouter          from './routers/AppRouter';

import configureStore     from './store/configureStore';

import { addExpense }     from './actions/expenses';
import { setTextFilter }  from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'; //ALL browsers start at the same style base
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
//------------------imports----------------------------------------------------

// get access to our store setup and put it in our 'store' variable:
const store = configureStore();






store.dispatch(addExpense({description: 'Water bill', amount: 600, createdAt: 12000}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 5000}));
store.dispatch(addExpense({description: 'Rent', amount: 166600, createdAt: 1000}));




const state = store.getState(); // grab the current state,
// pass those args into our function:
const vsibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// log the results
console.log(vsibleExpenses);




console.log('testing');








// Provider has it's own store prop... we pass our store into it.
const jsx = ( 
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));