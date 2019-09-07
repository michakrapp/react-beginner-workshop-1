import React from 'react';

const ShowAlertOnClick = () => {

    const handleClick = () => {
        alert('Congratulations, you\'ve won a brand new IPhone XS.');
    };

    return <button onClick={handleClick}>Click me!</button>;
};

export default ShowAlertOnClick