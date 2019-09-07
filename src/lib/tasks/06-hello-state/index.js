import React, {useState} from 'react';

// components can have (internal) states
// for example, a Modal component would have the State "isOpened" because the user triggered the modal
// or a MusicPlayer component holding the state of the current playing track etc

// all our previous components were pure and had no states till yet

// note. the fewer states the better. not everything has to be in or to be a state

// the cool kids of 2019 use hooks for states
const HelloState = () => {
    // use the "useState" function from react.
    // you can pass the function an initial value. it could be a string in our case.

    // its return value is an array with two elements
    // the first is the current value, (it updates if you use the setter)
    // the second is a setter function to mutate the first (or update the state)
    // note: if you want to change the value, always use the setter

    // use it here in between

    // use it here in between

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