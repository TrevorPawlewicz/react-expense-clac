// set the default state as an empty array:
const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, // spread operator on state array
                action.expense // add the new item to the array
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
}; // expensesReducer --------------------------------------------------------


export default expensesReducer;