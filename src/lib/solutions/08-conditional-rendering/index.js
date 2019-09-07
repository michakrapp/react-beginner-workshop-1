import React, {useState} from 'react';

const ConditionalRendering = () => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <button onClick={handleClick}>toggle active</button>
            {isActive
                ? <div>show component A</div>
                : <div>show component B</div>
            }
        </div>
    );
};

export default ConditionalRendering;