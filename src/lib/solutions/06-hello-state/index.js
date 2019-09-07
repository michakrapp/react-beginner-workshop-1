import React, {useState} from 'react';

const HelloState = () => {
    const [message, setMessage] = useState('I am the initial state!');

    const handleClick = () => {
        setMessage('That\'s a new state!');
    };

    return (
        <div>
            <p>Actual state is:<br/>{message}</p>
            <button onClick={handleClick}>
                Click me and change the state!
            </button>
        </div>
    );
}

export default HelloState;