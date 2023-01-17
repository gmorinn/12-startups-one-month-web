import React, { FC } from 'react';
import { CheckBoolean } from '../utils/checkValue';
import { ButtonType } from '../utils/types';
import MinLoader from './MinLoader';

interface Props {
    action?: any;
    disabled?: boolean;
    className: string;
    type?: ButtonType;
}

const Button: FC<Props> = ({ children, action, disabled, className, type }) => {
    return (
        <button
            type={type !== undefined ? type : ButtonType.BUTTON}
            onClick={action}
            disabled={disabled}
            className={className}>
            {CheckBoolean(disabled) ? <MinLoader /> : children}
        </button>
    );
};

export default Button;
