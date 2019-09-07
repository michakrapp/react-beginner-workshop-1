import React, {useState} from 'react';

// sometimes you want to initialize your state with a prop
// for example your component calculates something based on this prop input

// this component receives a prop called "initialMessage"
// use it to initialize your stat

const HelloState = (props) => {

    const [message, setMessage] = useState(/*your prop here*/);

    const handleClick = () => {
        setMessage('Changed the state!');
    };

    return (
        <div>
            <p>Actual state is:<br/><strong>{message}</strong></p>
            <button onClick={handleClick}>
                Click me and change the state!
            </button>
        </div>
    );
}


export default HelloState;