import React from 'react';
import {Article, BoldText, Paragraph} from './index.js';

export default () => (
    <Article
        author='Bob'
        date={new Date().toString()}
    >
        <Paragraph>This is a lot of text about a good article.</Paragraph>
        <Paragraph>That's another one</Paragraph>
        <Paragraph>Final text here with <BoldText>bold text</BoldText>.</Paragraph>
    </Article>
);