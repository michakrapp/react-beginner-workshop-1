import React, {useState} from 'react';

const ConditionalRendering = () => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    };

    // display a different element, according the isActive state
    // so return component a if isActive and vice versa

    return (
        <div>
            <button onClick={handleClick}>toggle active</button>
            {yourCurrentElement}
        </div>
    );
};

export default ConditionalRendering;