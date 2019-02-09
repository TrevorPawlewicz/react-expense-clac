import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//-------------------- imports -----------------------------------------------

// // action generator
// const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description: description,
//         note: note,
//         amount: amount,
//         createdAt: createdAt
//     }
// });
// 
// // an action generato that implicitly returns a function
// // NEED the id. No default required.
// const removeExpense = ({id} = {}) => ({
//     type: 'REMOVE_EXPENSE',
//     id: id
// });
// 
// // EDIT_EXPENSE: implicit return an object ('return' keyword not used)
// const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
// });

// // set the default state as an empty array:
// const expensesReducerDefault = [];
// 
// const expensesReducer = (state = expensesReducerDefault, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [
//                 ...state, // spread operator on state array
//                 action.expense // add the new item to the array
//             ];
//         case 'REMOVE_EXPENSE':
//             return state.filter(({id}) => {
//                 return id !== action.id;
//             });
//         case 'EDIT_EXPENSE':
//             return state.map((expense) => {
//                 if (expense.id === action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     };
//                 } else {
//                     return expense;
//                 };
//             });
//         default:
//             return state;
//     }
// }; // expensesReducer --------------------------------------------------------
//----------------------------------------------------------------------------

// // SET_TEXT_FILTER: set empty string if no arg value is passed into function
// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });
// 
// // SORT_BY_DATE: set a variable that implicitly returns an object
// const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// });
// 
// // SORT_BY_AMOUNT: set a variable that implicitly returns an object
// const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
// });
// 
// // SET_START_DATE: set a variable that implicitly returns an object
// const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// });
// 
// // SET_START_DATE: set a variable that implicitly returns an object
// const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// });

// // set the default object with these key: value pairs:
// const filtersReducerDefault = {text:'', sortBy:'date', startDate:undefined, endDate:undefined};
// 
// const filtersReducer = (state = filtersReducerDefault, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             };
//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             };
//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             };
//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             };
//         case 'SET_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             };
//         default:
//             return state;
//     }
// }; // filtersReducer ---------------------------------------------------------
//----------------------------------------------------------------------------


// // get visible expenses:
// //                                    with destructuring the filters arg:
// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//     return expenses.filter((expense) => {
//         // declare our matching variables:
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
// 
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1;
//         }
//         else if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });
// };




// const store = createStore (
//     // combine mutiple reducers to s single store
//     combineReducers({
//         expenses: expensesReducer,
//         filters: filtersReducer
//     })
// );

store.subscribe(() => {
    const state = store.getState(); // grab the current state,
    // pass those args into our function:
    const vsibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    // log the results
    console.log(vsibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 3000, createdAt: 5000}));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// 
// // pass in the id and the object we want to update: amount
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
// 
// store.dispatch(setTextFilter('ee'));
// store.dispatch(setTextFilter());
// 
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));



const demoState = {
    expenses: [{
        id: '??????????',
        description: 'January Rent',
        note: 'Deposit for first month of new aptartment.',
        amount: 54500, // in pennies
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};





