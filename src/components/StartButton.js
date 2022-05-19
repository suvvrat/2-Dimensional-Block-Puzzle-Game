import React from 'react';
import { StyledStartButton } from './Styles/styledStartButton';

const StartButton = ({ callBack }) => (
    <StyledStartButton onClick={callBack}>Start Game</StyledStartButton>
)

export default StartButton