import React from 'react';
import { StyledDisplay } from './Styles/styledDisplay';

const Display = ({ gameOver, text }) => (
    <StyledDisplay gameOver={gameOver}>
        {text}
    </StyledDisplay>
)

export default Display;