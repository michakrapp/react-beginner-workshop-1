import React from 'react';
import {Article, Title, BoldText, Paragraph} from './index.js';

// this is some more nesting/children

export default () => (
    <Article
        author='Bob'
        date={new Date().toString()}
    >
        <Title>Hello World</Title>
        <Paragraph>This is a lot of text about a good article.</Paragraph>
        <Paragraph>That's another one</Paragraph>
        <Paragraph>Final text here with <BoldText>bold text</BoldText>.</Paragraph>
    </Article>
);