import React    from 'react';
import { Link } from 'react-router-dom';
//---------------------imports-------------------------------------------------


// stateless functional component that implicitly returns JSX:
// Destructoring the props object
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={{
            pathname:`/edit/${id}`,
            state: { id }
        }}>
            <h3>{description}</h3>
        </Link>
        
        <p>{amount} - {createdAt}</p>
    </div>
);


export default ExpenseListItem;