// Higher Order Component (HOC): a component that renders another component
// - reuse code
// - render hijacking
// - prop manipulation
// - abstract state

import React     from 'react';
import ReactDOM  from 'react-dom';
//--------------------------imports--------------------------------------------




// 1
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info: {props.info}</p>
    </div>
);




// 3
// a regular function
const withAdminWarning = (WrappedComponent) => {
    // return a Higher Order Component (with props):
    // spread out props and pass down:
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info! Do not share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};



// 2
// component that calls function passing another component as the first arg
const AdminInfo = withAdminWarning(Info);





// 3 ---------------------another example--------------------------------------
// a regular function
const requireAuthentication = (WrappedComponent) => {
    // return a Higher Order Component (with props):
    // spread out props and pass down:
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to see the info</p>}
        </div>
    );
};
// 2
const AuthInfo = requireAuthentication(Info);
//---------------------another example-----------------------------------------

// 4
// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app') );
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app') );