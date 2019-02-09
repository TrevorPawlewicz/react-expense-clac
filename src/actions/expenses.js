import uuid from 'uuid';
//-------------------- imports -----------------------------------------------

// action generator
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// an action generato that implicitly returns a function
// NEED the id. No default required.
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// EDIT_EXPENSE: implicit return an object ('return' keyword not used)
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});