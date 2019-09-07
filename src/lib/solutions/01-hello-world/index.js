import React from 'react';


// explicit return
const myElement = () => {
    return (
        <h1>Hello World</h1>
    )
}

// implicit return, notice the round parenthesis
const myOtherElement = () => (
    <h1>Hello World</h1>
)

export default myElement;