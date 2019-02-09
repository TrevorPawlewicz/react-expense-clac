import { createStore } from 'redux'; // stores our state objects
//------------------imports----------------------------------------------------


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
});

// REDUCERS:
// 1. Reducers are pure function: doesn't change varibales outside it's scope.
// 2. Never changes the state or action

// createStore takes arguments(state, action);
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { 
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return { 
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return { 
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
        return state;
    }
};

const store = createStore(countReducer); // call Redux's creatSTore func

// print out to the console:
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Actions = an object that gets sent to the store (through dispatch)
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 666 }));