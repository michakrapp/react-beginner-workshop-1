import React from 'react';
import HelloWorldWithProps from './index.js';

// this component receives a prop named message

export default () => (
    <HelloWorldWithProps
        message='Hello World from props!'
    />
);