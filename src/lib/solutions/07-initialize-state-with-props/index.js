import React, {useState} from 'react';

const HelloState = (props) => {
    const {initialMessage} = props;
    const [message, setMessage] = useState(initialMessage);

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