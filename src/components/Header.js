import React       from 'react';
import { NavLink } from 'react-router-dom';
//------------------imports----------------------------------------------------


const Header = () => (
    <div>
        <header><h1>Expensify</h1></header>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">AddExpensePage</NavLink>
        <NavLink to="/edit" activeClassName="is-active">EditExpensePage</NavLink>
        <NavLink to="/help" activeClassName="is-active">HelpPage</NavLink>
    </div>
);

export default Header;