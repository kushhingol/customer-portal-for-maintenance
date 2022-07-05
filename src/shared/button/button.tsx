import React from 'react';
import "./button.styles.css"

type ButtonProps = {
    buttonName: string;
    onClickHandler: () => void;
    id: string;
}

export const Button: React.FC<ButtonProps> = ({id, buttonName, onClickHandler}) => {
    return <button id={id} onClick={onClickHandler} className="button-style">{buttonName}</button>
}