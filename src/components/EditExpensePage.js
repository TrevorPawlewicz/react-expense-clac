import React                          from 'react';
import { connect }                    from 'react-redux';
import ExpenseForm                    from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
//------------------imports----------------------------------------------------

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// I had to add state to the <Link to={}> (in ExpenseForm.js) 
// because props.match.params.id NO LONGER WORKED.

const EditExpensePage = (props) => {
    //console.log("props:", props);
    //console.log("props.location.state.id =", props.location.state.id);
    
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated:', expense);
                    //             editExpense takes (id, updates)
                    props.dispatch(editExpense(props.location.state.id, expense));
                    props.history.push('/');
                }}
            />
            
            <button 
                onClick={() => {
                    props.dispatch(removeExpense({ id: props.location.state.id }));
                    props.history.push('/');
                }} >Remove
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.location.state.id;
        })
    }
};

export default connect(mapStateToProps)(EditExpensePage);

