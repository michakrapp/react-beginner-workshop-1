import React from 'react';

export const Title = (props) => {
    return <h3>{props.children}</h3>;
}

export const Paragraph = (props) => {
    return <p>{props.children}</p>;
}

export const Article = (props) => {
    return (
        <div>
            <Title>Title of the article</Title>
            {props.children}
            <span>Author: {props.author}</span>
        </div>
    );
}

export const BoldText = (props) => {
    return <strong>{props.children}</strong>;
}