import React from 'react';

// create 4 components which use the props provided from the parent in demo.js

export const Title = (props) => {
    return <h1>{props.children}</h1>
}

export const Paragraph = (props) => {
    return <p>{props.children}</p>
}

export const Article = (props) => {
    return (
        <div>
            <span>{props.author}</span>,<span>{props.date}</span>
            <div>{props.children}</div>
        </div>
    )
}

export const BoldText = (props) => {
    return <strong>{props.children}</strong>
}