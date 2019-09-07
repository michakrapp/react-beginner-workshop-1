import React from 'react';

// every native dom element accepts different kinds of event listeners

const ShowAlertOnClick = () => {

    // create a function called "handleClick" which, for example, throws an alert

    // here we pass the handleClick to the onClick listener
    return <button onClick={handleClick}>Click me!</button>;
};

export default ShowAlertOnClick