import React          from 'react';
import { connect }    from 'react-redux';
import ExpenseForm    from './ExpenseForm';
import { addExpense } from '../actions/expenses';
//------------------imports----------------------------------------------------


const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                console.log('expense:', expense);
                
                props.dispatch(addExpense(expense)); // process the data
                props.history.push('/'); // redirect to root page
            }} 
        />
    </div>
);

export default connect()(AddExpensePage);