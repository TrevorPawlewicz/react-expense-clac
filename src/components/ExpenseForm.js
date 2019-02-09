import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//---------------------imports-------------------------------------------------

const now = moment();
//console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
// must use the constructor function to manipulate the state with passed props!
    constructor (props) {
        super (props);
        
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }

    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }; // onDescriptionChange ------------------------------------------------
    
    onAmountChange = (e) => {
        const amount = e.target.value;
        
        // regex to match only numbers and with two places after the decimal
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount: amount }));
        }
    }; // onAmountChange ------------------------------------------------------
    
    onDateChange = (createdAt) => {
        // if there is a created value, then set the date 
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }; // onDateChange --------------------------------------------------------
    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }; // onFocusChange -------------------------------------------------------
    
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note: note }));
    }; // onNoteChange --------------------------------------------------------
    
    onSubmit = (e) => {
        e.preventDefault(); // stop browser full page refresh. word.
        
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({ error: ''}));
            
            // let's pass the info needed with an object
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }; // onSubmit ------------------------------------------------------------
    
    render() {
        return (
            <div>
                {this.state.error && <h3>{this.state.error}</h3>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
                    
                    <SingleDatePicker
                        date={ this.state.createdAt } // momentPropTypes.momentObj or null
                        onDateChange={ this.onDateChange } // PropTypes.func.isRequired
                        focused={ this.state.calenderFocused } // PropTypes.bool
                        onFocusChange={ this.onFocusChange } // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false }
                    />

                    <textarea placeholder="Add a note for your expense. (Optional)" value={this.state.note} onChange={this.onNoteChange} ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}