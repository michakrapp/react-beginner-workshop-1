import React from 'react';

// to be able to nest components, react provides us with a special prop called "children"


const BoldText = (props) => {

    return (
        <strong>
            {// use the children vriable from props here
                props.children
            }
        </strong>
    );
};

export default BoldText